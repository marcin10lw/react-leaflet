interface CardProps {
  children?: React.ReactNode;
  title: string;
}

export const Card = ({ title, children }: CardProps) => {
  return (
    <div className="rounded border-b border-slate-300">
      <div className="p-2 font-bold">{title}</div>
      <div className="p-2">{children}</div>
    </div>
  );
};
