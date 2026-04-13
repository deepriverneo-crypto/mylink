import Image from "next/image";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen items-center justify-center bg-zinc-50 font-sans dark:bg-zinc-950 p-6">
      <main className="flex flex-col w-full max-w-2xl items-center text-center space-y-12 py-20">
        
        {/* Header Section */}
        <section className="space-y-4">
          <div className="inline-block px-3 py-1 text-sm font-medium bg-zinc-200 dark:bg-zinc-800 rounded-full text-zinc-600 dark:text-zinc-400">
            Singer-Songwriter
          </div>
          <h1 className="text-5xl font-bold tracking-tighter text-zinc-900 dark:text-white">
            강산에
          </h1>
          <p className="text-xl text-zinc-600 dark:text-zinc-400 italic">
            "거꾸로 강을 거슬러 오르는 저 힘찬 연어들처럼"
          </p>
        </section>

        {/* Introduction Section */}
        <section className="space-y-6 max-w-lg">
          <p className="text-lg leading-relaxed text-zinc-700 dark:text-zinc-300">
            1992년 데뷔 이후, 한국 포크 록의 새로운 지평을 연 아티스트입니다. 
            투박하면서도 따뜻한 목소리로 실향민의 아픔부터 사회적 희망까지 
            우리 시대의 정서를 자유롭게 노래해 왔습니다.
          </p>
        </section>

        {/* Representative Songs Section */}
        <section className="w-full space-y-6">
          <h2 className="text-2xl font-semibold text-zinc-800 dark:text-zinc-200 border-b pb-2 inline-block">
            대표곡
          </h2>
          <ul className="grid grid-cols-1 gap-4 text-zinc-600 dark:text-zinc-400">
            <li className="flex flex-col items-center">
              <span className="font-bold text-zinc-800 dark:text-zinc-200">...라구요 (1992)</span>
              <span className="text-sm">실향민의 아픔을 담은 감동적인 데뷔곡</span>
            </li>
            <li className="flex flex-col items-center">
              <span className="font-bold text-zinc-800 dark:text-zinc-200">넌 할 수 있어 (1994)</span>
              <span className="text-sm">수많은 이들에게 용기를 준 국민 응원가</span>
            </li>
            <li className="flex flex-col items-center">
              <span className="font-bold text-zinc-800 dark:text-zinc-200">거꾸로 강을 거슬러 오르는 저 힘찬 연어들처럼 (1998)</span>
              <span className="text-sm">삶의 역동성과 생명력을 노래한 명곡</span>
            </li>
            <li className="flex flex-col items-center">
              <span className="font-bold text-zinc-800 dark:text-zinc-200">명태 (2002)</span>
              <span className="text-sm">해학적이고 독특한 리듬의 실험적 곡</span>
            </li>
            <li className="flex flex-col items-center">
              <span className="font-bold text-zinc-800 dark:text-zinc-200">와그라노 (2002)</span>
              <span className="text-sm">경상도 사투리의 매력을 극대화한 블루스 록</span>
            </li>
          </ul>
        </section>

        {/* Footer/Tag Section */}
        <footer className="pt-10 border-t w-full max-w-xs flex flex-wrap justify-center gap-2">
          {["야생마", "자연인", "포크 록", "블루스", "자유"].map((tag) => (
            <span key={tag} className="text-xs text-zinc-500 dark:text-zinc-500 uppercase tracking-widest">
              #{tag}
            </span>
          ))}
        </footer>
      </main>
    </div>
  );
}
