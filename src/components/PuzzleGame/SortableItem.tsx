import React from "react";
import { useSortable } from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";
import classes from "./PuzzlesLogic.module.scss";
import { SortableItemProps } from "../../types";

export const SortableItem: React.FC<SortableItemProps> = React.memo(
  ({ id, sortable }) => {
    const { attributes, listeners, setNodeRef, transform, transition } =
      useSortable({ id: id });

    const style = sortable
      ? {
          transform: CSS.Transform.toString(transform),
          transition,
        }
      : {};

    const extraProps = sortable
      ? {
          ref: setNodeRef,
          ...attributes,
          ...listeners,
        }
      : {};

    return (
      <span
        data-testid="itemCnt"
        className={sortable ? classes.dragable : ""}
        style={style}
        {...extraProps}
      >
        {id !== 0 ? id : ""}
      </span>
    );
  }
);
