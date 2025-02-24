"use client";

import React from "react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/common/module/select";
import { TEditItem } from "@/components/blog/types";

const BlogEditSelect = ({
  lists,
  onSelect,
  selectedId,
}: {
  lists: TEditItem[];
  onSelect: (id: string) => void;
  selectedId: undefined | string;
}) => {
  const handleSelectChange = (value: string) => {
    onSelect(value);
  };

  return (
    <div className="w-[300px] mb-6">
      <label className="block text-sm font-medium text-gray-700 mb-2">
        Select a Post to Edit
      </label>
      <Select onValueChange={handleSelectChange} value={selectedId}>
        <SelectTrigger className="w-full">
          <SelectValue placeholder="Select a post" />
        </SelectTrigger>
        <SelectContent>
          {lists.map((list) => (
            <SelectItem key={list.id} value={list.id.toString()}>
              {list.title} - {list.categories.name}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
    </div>
  );
};

export default BlogEditSelect;
