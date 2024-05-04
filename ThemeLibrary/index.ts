import definePlugin, { OptionType } from "@utils/types";
import { definePluginSettings } from "@api/Settings";

const settings = definePluginSettings({
    domain: {
        type: OptionType.BOOLEAN,
        default: false,
        description: "Use Github instead of the default domain for themes",
        restartNeeded: false
    },
});

export default definePlugin({
    name: "ThemeLibrary",
    description: "A library of themes for Vencord.",
    authors: [{
        name: "Fafa",
        id: 428188716641812481n,
    }],

    start() {
        const customSettingsSections = (
            Vencord.Plugins.plugins.Settings as any as { customSections: ((ID: Record<string, unknown>) => any)[]; }
        ).customSections;

        const ThemeSection = () => ({
            section: "ThemeLibrary",
            label: "Theme Library",
            element: require("./components/ThemeTab").default,
            id: "ThemeSection"
        });

        customSettingsSections.push(ThemeSection);
    },

    stop() {
        const customSettingsSections = (
            Vencord.Plugins.plugins.Settings as any as { customSections: ((ID: Record<string, unknown>) => any)[]; }
        ).customSections;

        const i = customSettingsSections.findIndex(section => section({}).id === "ThemeSection");

        if (i !== -1) customSettingsSections.splice(i, 1);
    },
    settings
});
