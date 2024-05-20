/*
 * Vencord, a Discord client mod
 * Copyright (c) 2024 Vendicated and contributors
 * SPDX-License-Identifier: GPL-3.0-or-later
 */

import { showNotification } from "@api/Notifications";
import { definePluginSettings } from "@api/Settings";
import { ErrorCard } from "@components/ErrorCard";
import { Margins } from "@utils/margins";
import definePlugin, { OptionType } from "@utils/types";
import { Forms } from "@webpack/common";

const url = "https://api.wakatime.com/api/v1";
let lastHeartbeatAt = 0;
let isFirstCall = true;

const settings = definePluginSettings({
    warnUser: {
        description: "Warn the user about privacy implications",
        type: OptionType.COMPONENT,
        default: true,
        component: () => (
            <ErrorCard id="vc-wakatime-warning">
                <Forms.FormTitle tag="h2">Warning: do not input personal data!</Forms.FormTitle>
                <Forms.FormText className={Margins.bottom8}>
                    Anyone is able to see the data you send to WakaTime.
                </Forms.FormText>
                <Forms.FormText>
                    Do <b>not</b> input any personal data.
                </Forms.FormText>
            </ErrorCard >
        )
    },
    heartbeatSuccess: {
        type: OptionType.BOOLEAN,
        description: "Display a notification when the first heartbeat is sent successfully",
        default: true,
    },
    apiKey: {
        type: OptionType.STRING,
        description: "Your API Key for WakaTime",
        default: "waka_CHANGEME",
        isValid: (e: string) => {
            if (!e.startsWith("waka_")) return "Invalid API Key: WakaTime API Key must start with 'waka_'";
            if (e === "waka_CHANGEME") return "Invalid API Key: Please change the default API Key";
            return true;
        },
    },
    projectName: {
        type: OptionType.STRING,
        description: "Project Name",
        default: "Discord",
    },
    machineName: {
        type: OptionType.STRING,
        description: "Machine Name",
        default: "VendingMachine",
    },
});

function enoughTimePassed() {
    return lastHeartbeatAt + 120000 < Date.now();
}

async function sendHeartbeat(time: number) {
    const { apiKey, projectName, machineName, heartbeatSuccess } = settings.store;
    if (!apiKey || apiKey === "waka_CHANGEME") {
        showNotification({
            title: "WakaTime",
            body: "Your WakaTime API key is not set. Please set it in the plugin settings",
            color: "var(--red-360)"
        });

        return;
    }

    const body = JSON.stringify({
        time: time / 1000,
        entity: "Discord",
        type: "app",
        project: projectName ?? "Discord",
        plugin: "vencord/version discord-wakatime/v0.0.1",
        category: "communicating",
    });

    const headers = {
        Authorization: `Basic ${apiKey}`,
        "Content-Type": "application/json",
        "Content-Length": new TextEncoder().encode(body).length.toString(),
        "X-Machine-Name": machineName ?? "VendingMachine",
    };

    await fetch(url + "/users/current/heartbeats", {
        method: "POST",
        body: body,
        headers: headers,
    }).then(() => {
        if (!heartbeatSuccess) return;
        if (!isFirstCall) return;

        showNotification({
            title: "WakaTime",
            body: "Successfully sent the first heartbeat to WakaTime",
            color: "var(--green-360)"
        });

        isFirstCall = false;
    }).catch(() => {
        showNotification({
            title: "WakaTime",
            body: "Failed to send heartbeat to WakaTime. Check your API key and try again",
            color: "var(--red-360)"
        });
    });
}

async function handleAction() {
    const time = Date.now();
    if (!enoughTimePassed()) return;
    lastHeartbeatAt = time;
    await sendHeartbeat(time);
}

export default definePlugin({
    name: "WakaTime",
    description: "Track your time spent on Discord with WakaTime",
    authors: [
        {
            id: 566766267046821888n,
            name: "Neon",
        },
        {
            name: "Fafa",
            id: 428188716641812481n
        }
    ],
    settings,

    start() {
        lastHeartbeatAt = 0;
        isFirstCall = true;

        this.handler = handleAction.bind(this);
        document.addEventListener("keypress", this.handler);
    },
    stop() {
        document.removeEventListener("keypress", this.handler);
    },
});
