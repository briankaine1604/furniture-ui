interface Props {
  children: React.ReactNode;
  className?: string;
}

export const Container = ({ children, className }: Props) => {
  return (
    <div className={`max-w-6xl px-8 mx-auto w-full h-full ${className}`}>
      {children}
    </div>
  );
};
