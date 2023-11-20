import { BsGithub } from "react-icons/bs";
type Props = {
  title: string;
  repo: string;
  tools: string[];
};

export default function Card({ title, tools, repo }: Props) {
  return (
    <div className="snap-center flex flex-col rounded-[12px] min-w-[300px] w-96 h-[450px] cursor-pointer p-1 relative overflow-hidden group">
      <div className="absolute w-full top-12 h-full bg-[#ededed] bg-opacity-5 group-hover:bg-white/[.02] rounded-3xl duration-200 blur-xl"></div>
      <div className="rounded-lg overflow-hidden w-full flex flex-[3] ">
        <img
          src="https://developers.elementor.com/docs/assets/img/elementor-placeholder-image.png"
          alt=""
          width={400}
          height={0}
          className="aspect-video group-hover:scale-105 duration-200"
        />
      </div>
      <div className="flex flex-col flex-[2] mt-3">
        <div className="flex justify-center items-center px-2 mt-2 text-2xl text-[--white] tracking-widest">
          <h4>{title}</h4>
        </div>
        <div className="flex flex-wrap gap-2 px-2 mt-6">
          {tools.map((tool, i) => (
            <Chip key={i}>{tool}</Chip>
          ))}
        </div>
        <div className="mt-auto p-2 flex flex-row-reverse gap-2 z-10">
          {!!repo && (
            <a href={repo} target="_blank">
              <BsGithub size={20} />
            </a>
          )}
        </div>
      </div>
    </div>
  );
}

function Chip({ children }: { children: string }) {
  return (
    <div className="w-20 text-[--white] text-center rounded-full border border-[--purple] text-xs px-1 font-semibold">
      {children}
    </div>
  );
}
