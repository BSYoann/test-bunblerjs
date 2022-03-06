export default function removeLogs() {
  return {
    name: "remove-logs",
    /**
     *
     * @param {string} code content of file
     * @param {string} id path of file
     * @returns Object {code, map}
     */
    transform: async function (code, id) {
      if (!id.endsWith(".js")) return null;
      const transformedCode = code.replace(/console\.log(.*)/g, "");
      return {
        code: transformedCode,
        map: { mappings: "" },
      };
    },
  };
}
