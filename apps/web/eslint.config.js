import config from "@repo/eslint-config"

export default [...config, ...pluginRouter.configs["flat/recommended"]]
