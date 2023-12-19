import type { CSSProperties, FC, ReactNode } from "react";
import { memo, useMemo, useRef } from "react";
import type { DragSourceMonitor } from "react-dnd";
import { useDrag, useDrop } from "react-dnd";

const style: CSSProperties = {
  border: "1px dashed gray",
  padding: "0.5rem",
  margin: "0.5rem",
};

export interface SourceBoxProps {
  id: string;
  onToggleForbidDrag?: () => void;
  children?: ReactNode;
}

const ItemType = "BOX";

// 定义拖动对象的类型
interface DragItem {
  type: string;
  id: string;
}

const Box: FC<SourceBoxProps> = memo(function SourceBox({ id, children }) {
  const ref = useRef<HTMLDivElement>(null);

  const [{ isDragging }, drag] = useDrag(
    () => ({
      type: ItemType,
      canDrag: true,
      item: { id },
      collect: (monitor: DragSourceMonitor) => ({
        isDragging: monitor.isDragging(),
      }),
    }),
    []
  );

  const [{ isOver }, drop] = useDrop(() => ({
    accept: ItemType,
    drop: (item: DragItem, monitor) => {
      if (!monitor.isOver({ shallow: true })) {
        return;
      }
      // 处理放置逻辑
      console.log("Dropped item:", item.id, "target:", id);
    },
    collect: (monitor) => ({
      isOver: !!monitor.isOver(),
      canDrop: !!monitor.canDrop,
    }),
  }));

  const containerStyle = useMemo(
    () => ({
      ...style,
      backgroundColor: isOver ? "lightgreen" : "white",
      opacity: isDragging ? 0.4 : 1,
      cursor: "move",
      minWidth: 200,
    }),
    [isDragging, isOver]
  );

  drag(drop(ref));

  return (
    <div ref={ref} style={containerStyle} role="Box">
      {children}
    </div>
  );
});

export default Box;
