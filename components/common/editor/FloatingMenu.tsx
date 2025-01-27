import { motion } from "motion/react";
import { Editor } from "@tiptap/react";
import { Code, Image, Link, Table } from "lucide-react";

interface FloatingMenuProps {
  editor: Editor | null;
  onSubmit: () => void;
}

export const FloatingMenu = ({ editor, onSubmit }: FloatingMenuProps) => {
  if (!editor) {
    return null;
  }

  const insertItems = [
    {
      icon: Code,
      title: "Code Block",
      action: () => editor.chain().focus().setCodeBlock().run(),
    },
    {
      icon: Image,
      title: "Image",
      action: () => {
        const url = window.prompt("Image URL");
        if (url) {
          editor.chain().focus().setImage({ src: url }).run();
        }
      },
    },
    {
      icon: Table,
      title: "Table",
      action: () =>
        editor
          .chain()
          .focus()
          .insertTable({ rows: 3, cols: 3, withHeaderRow: true })
          .run(),
    },
    {
      icon: Link,
      title: "Link",
      action: () => {
        const url = window.prompt("URL");
        if (url) {
          editor.chain().focus().setLink({ href: url }).run();
        }
      },
    },
  ];

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 20 }}
      className="sticky top-20 flex flex-col gap-4"
    >
      <div className="flex flex-col gap-2">
        {insertItems.map((item, index) => (
          <button
            key={index}
            onClick={item.action}
            className="flex items-center gap-2 p-2 text-sm rounded hover:bg-gray-100 dark:hover:bg-gray-800"
            title={item.title}
          >
            <item.icon className="w-4 h-4" />
            <span>{item.title}</span>
          </button>
        ))}
      </div>
      <button
        onClick={onSubmit}
        className="w-full py-3 bg-theme text-background rounded-lg hover:bg-theme/50 transition-colors"
      >
        Submit
      </button>
    </motion.div>
  );
};
