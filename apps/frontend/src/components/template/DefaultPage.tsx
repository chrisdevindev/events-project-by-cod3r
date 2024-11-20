import Logo from "./Logo";

export interface PageProps {
  children: React.ReactNode;
  className?: string;
}

export default function DefaultPage(props: PageProps) {
  return (
    <div className="flex flex-col items-center py-10 min-h-screen bg-[url('/background.png')] bg-cover">
      <Logo />
      <main
        className={`flex-1 flex flex-col justify-center py-10 ${props.className} container`}
      >
        {props.children}
      </main>
    </div>
  );
}
