import { BubbleMenu, Editor } from "@tiptap/react";
import {
  Bold,
  Code,
  Highlighter,
  List,
  ListOrdered,
  Table,
} from "lucide-react";
import { useState } from "react";
import { HIGHLIGHT_COLORS } from "@/components/common/editor/constants";
import { cn } from "@/libs/utils";

interface BubbleMenuBarProps {
  editor: Editor | null;
}

export const CustomBubbleMenu = ({ editor }: BubbleMenuBarProps) => {
  const [showColorPicker, setShowColorPicker] = useState(false);

  if (!editor) return null;
  const items = [
    {
      icon: Bold,
      title: "Bold",
      action: () => editor.chain().focus().toggleBold().run(),
      isActive: () => editor.isActive("bold"),
    },
    {
      icon: Code,
      title: "Code",
      action: () => editor.chain().focus().toggleCode().run(),
      isActive: () => editor.isActive("bold"),
    },
    {
      icon: List,
      title: "Bullet List",
      action: () => editor.chain().focus().toggleBulletList().run(),
      isActive: () => editor.isActive("bulletList"),
    },
    {
      icon: ListOrdered,
      title: "Ordered List",
      action: () => editor.chain().focus().toggleOrderedList().run(),
      isActive: () => editor.isActive("orderedList"),
    },
    {
      icon: Table,
      title: "Insert Table",
      action: () =>
        editor.commands.insertContent({
          rows: 3,
          cols: 3,
          withHeaderRow: true,
        }),
    },
  ];

  const currentColor = editor.getAttributes("highlight").color;

  return (
    <BubbleMenu
      editor={editor}
      tippyOptions={{
        duration: 100,
        placement: "top",
      }}
      className="flex items-center gap-1 p-2 rounded-lg border border-background bg-background shadow-lg"
    >
      {items.map((item, index) => (
        <button
          key={index}
          onClick={item.action}
          className={`p-1 rounded hover:bg-theme/10 transition-colors
            ${item.isActive?.() ? "text-theme" : "text-theme/80"}`}
          title={item.title}
        >
          <item.icon className="w-4 h-4" />
        </button>
      ))}
      <div className="relative">
        <button
          onClick={() => setShowColorPicker(!showColorPicker)}
          className={`p-1 rounded hover:bg-theme/10 transition-colors
            ${editor.isActive("highlight") ? "text-theme" : "text-theme/80"}`}
          title="Highlight"
        >
          <Highlighter
            className={cn("w-4 h-4", "text-theme")}
            color={currentColor}
          />
        </button>
        {showColorPicker && (
          <div className="absolute top-full mt-1 p-1 rounded-lg border border-background bg-background shadow-lg flex gap-1">
            {HIGHLIGHT_COLORS.map((color) => (
              <button
                key={color.name}
                onClick={() => {
                  editor
                    .chain()
                    .focus()
                    .setHighlight({ color: color.value })
                    .run();
                  setShowColorPicker(false);
                }}
                className="w-6 h-6 rounded transition-transform hover:scale-110"
                style={{ backgroundColor: color.value }}
                title={color.name}
              />
            ))}
            <button
              onClick={() => {
                editor.chain().focus().unsetHighlight().run();
                setShowColorPicker(false);
              }}
              className="w-6 h-6 rounded border border-gray-300 flex items-center justify-center hover:bg-gray-100"
              title="Remove highlight"
            >
              ✕
            </button>
          </div>
        )}
      </div>
    </BubbleMenu>
  );
};
