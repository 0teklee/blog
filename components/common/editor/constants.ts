import { Heading } from "@tiptap/extension-heading";
import { mergeAttributes } from "@tiptap/core";

export const HIGHLIGHT_COLORS = [
  { name: "yellow", value: "#f8b200" },
  { name: "green", value: "#108f3e" },
  { name: "blue", value: "#2e39aa" },
  { name: "red", value: "#aa3131" },
  { name: "purple", value: "#5c32a1" },
];

const generateId = (text: string) => {
  return text
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");
};

const CustomHeading = Heading.extend({
  renderHTML({ node, HTMLAttributes }) {
    const hasLevel = this.options.levels.includes(node.attrs.level);
    const level = hasLevel ? node.attrs.level : this.options.levels[0];

    const textContent = node.content.content?.[0]?.text || "";
    const id = generateId(textContent);

    return [
      `h${level}`,
      mergeAttributes(this.options.HTMLAttributes, HTMLAttributes, { id }),
      0,
    ];
  },
});
