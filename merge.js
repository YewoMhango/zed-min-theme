const [base, dark, light] = await Promise.all([
  Bun.file("./src/base.json").json(),
  Bun.file("./src/dark.json").json(),
  Bun.file("./src/light.json").json(),
]);

base.themes.push(
  {
    name: "Min Dark (Solid)",
    appearance: "dark",
    style: dark,
  },
  {
    name: "Min Dark (Blurred)",
    appearance: "dark",
    style: { ...dark, "background.appearance": "blurred" },
  },
  {
    name: "Min Dark (Opaque)",
    appearance: "dark",
    style: {
      ...dark,
      background: "#1A1A1A",
      "status_bar.background": "#1A1A1A",
      "title_bar.background": "#1A1A1A",
    },
  },
  {
    name: "Min Light (Solid)",
    appearance: "light",
    style: light,
  },
  {
    name: "Min Light (Blurred)",
    appearance: "light",
    style: { ...light, "background.appearance": "blurred" },
  },
  {
    name: "Min Light (Opaque)",
    appearance: "light",
    style: {
      ...light,
      background: "#FFFFFF",
      "status_bar.background": "#FFFFFF",
      "title_bar.background": "#FFFFFF",
    },
  },
);

await Bun.write("./themes/min-theme.json", JSON.stringify(base, null, 2));

console.log("Themes built successfully!");
