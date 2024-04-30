/*
 * Vencord, a modification for Discord's desktop app
 * Copyright (c) 2022 Vendicated and contributors
 *
 * This program is free software: you can redistribute it and/or modify
 * it under the terms of the GNU General Public License as published by
 * the Free Software Foundation, either version 3 of the License, or
 * (at your option) any later version.
 *
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU General Public License for more details.
 *
 * You should have received a copy of the GNU General Public License
 * along with this program.  If not, see <https://www.gnu.org/licenses/>.
*/

import { ModalProps } from "@utils/modal";
import { User } from "discord-types/general";

export interface Theme {
    id: string;
    name: string;
    file_name: string;
    content: string;
    type: string | "theme" | "snippet";
    description: string;
    external_url?: string;
    download_url: string;
    version?: string;
    author: {
        github_name?: string;
        discord_name: string;
        discord_snowflake: string;
    };
    likes?: number;
    downloads?: number;
    tags: string[];
    thumbnail_url: string;
    release_date: string;
    guild?: {
        name: string;
        snowflake: string;
        invite_link: string;
        avatar_hash: string;
    };
}

export interface ThemeInfoModalProps extends ModalProps {
    author: User;
    theme: Theme;
}

export const enum TabItem {
    THEMES,
    SUBMIT_THEMES,
}

export const enum SearchStatus {
    ALL,
    ENABLED,
    DISABLED,
    THEME,
    SNIPPET,
    DARK,
    LIGHT,
}
