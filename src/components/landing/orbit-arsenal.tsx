"use client";

import { Button } from "@/components/ui/button";
import { Brain } from "lucide-react";
import {
  FaAws,
  FaBootstrap,
  FaCss3Alt,
  FaDocker,
  FaGithub,
  FaGitAlt,
  FaGitlab,
  FaHtml5,
  FaJava,
  FaLinux,
  FaNodeJs,
  FaPython,
  FaRobot,
  FaVuejs,
} from "react-icons/fa";
import {
  SiC,
  SiCplusplus,
  SiCursor,
  SiExpress,
  SiFirebase,
  SiGooglecolab,
  SiIonic,
  SiJavascript,
  SiJupyter,
  SiMongodb,
  SiMysql,
  SiNextdotjs,
  SiNumpy,
  SiOpencv,
  SiPandas,
  SiPostgresql,
  SiRailway,
  SiReplit,
  SiSupabase,
  SiTensorflow,
  SiTypescript,
  SiVim,
  SiWindsurf,
} from "react-icons/si";
import { VscCode } from "react-icons/vsc";

const iconConfigs = [
  { Icon: SiC, color: "#A8B9CC" },
  { Icon: SiCplusplus, color: "#00599C" },
  { Icon: FaCss3Alt, color: "#1572B6" },
  { Icon: FaHtml5, color: "#E34F26" },
  { Icon: FaJava, color: "#ED8B00" },
  { Icon: SiJavascript, color: "#F7DF1E" },
  { Icon: FaPython, color: "#3776AB" },
  { Icon: SiExpress, color: "#FFFFFF" },
  { Icon: SiFirebase, color: "#FFCA28" },
  { Icon: SiMysql, color: "#4479A1" },
  { Icon: FaNodeJs, color: "#339933" },
  { Icon: SiPostgresql, color: "#336791" },
  { Icon: SiSupabase, color: "#3ECF8E" },
  { Icon: FaBootstrap, color: "#7952B3" },
  { Icon: SiIonic, color: "#3880FF" },
  { Icon: FaVuejs, color: "#4FC08D" },
  { Icon: FaAws, color: "#FF9900" },
  { Icon: FaDocker, color: "#2496ED" },
  { Icon: SiGooglecolab, color: "#F9AB00" },
  { Icon: SiRailway, color: "#FFFFFF" },
  { Icon: FaRobot, color: "#D72323" },
  { Icon: SiJupyter, color: "#F37726" },
  { Icon: SiNumpy, color: "#013243" },
  { Icon: SiOpencv, color: "#5C3EE8" },
  { Icon: SiPandas, color: "#150458" },
  { Icon: SiTensorflow, color: "#FF6F00" },
  { Icon: SiMongodb, color: "#47A248" },
  { Icon: SiNextdotjs, color: "#FFFFFF" },
  { Icon: SiTypescript, color: "#3178C6" },
  { Icon: SiCursor, color: "#FFFFFF" },
  { Icon: FaGitAlt, color: "#F05032" },
  { Icon: FaGithub, color: "#FFFFFF" },
  { Icon: FaGitlab, color: "#FC6D26" },
  { Icon: FaLinux, color: "#FCC624" },
  { Icon: SiReplit, color: "#F26207" },
  { Icon: SiVim, color: "#019733" },
  { Icon: VscCode, color: "#007ACC" },
  { Icon: SiWindsurf, color: "#FFFFFF" },
];

const skillGroups: { label: string; skills: string[] }[] = [
  { label: "Linguagens", skills: ["C", "C++", "CSS3", "HTML5", "Java", "JavaScript", "Python"] },
  { label: "Backend & Banco de Dados", skills: ["Express.js", "Firebase", "MySQL", "Node.js", "PostgreSQL", "Supabase"] },
  { label: "Frontend & Mobile", skills: ["Bootstrap", "Ionic", "Vue.js"] },
  { label: "Nuvem & DevOps", skills: ["Amazon AWS", "Docker", "Google Colab", "Railway"] },
  { label: "Ciência de Dados & IA", skills: ["AI Studio", "Anaconda", "Claude", "CrewAI", "Grok", "Ideogram", "Jupyter", "Matplotlib", "Meta AI", "NotebookLM", "NumPy", "OpenAI", "OpenCV", "Pandas", "Perplexity", "TensorFlow", "Z AI"] },
  { label: "Ferramentas & Plataformas", skills: ["Blackbox AI", "CLion", "Cursor", "Git", "GitHub", "GitLab", "Google Antigravity", "IntelliJ", "Linux", "Replit", "Trae", "Vim", "VS Code", "Windsurf"] },
];

export default function OrbitArsenal() {
  const orbitCount = 4;
  const orbitGap = 8;
  const iconsPerOrbit = Math.ceil(iconConfigs.length / orbitCount);

  return (
    <div className="mx-auto w-full max-w-[1320px]">
      <div className="relative flex h-[30rem] w-full items-center justify-between overflow-hidden rounded-3xl border border-[#3A4750]/45 bg-white pl-10">
        {/* Lado esquerdo: título + texto */}
        <div className="z-10 flex w-1/2 flex-col items-start justify-center text-left">
          <span className="mb-4 inline-flex items-center rounded-full border border-[#D72323]/40 bg-[#D72323]/10 px-3.5 py-1.5 text-[12px] font-black uppercase tracking-[0.2em] text-[#D72323]">
            {skillGroups.reduce((n, g) => n + g.skills.length, 0)} tecnologias
          </span>
          <h2 className="text-[32px] font-black leading-[1.05] text-[#303841] md:text-[40px]">
            Arsenal <span className="text-[#D72323]">Tecnológico</span>
          </h2>
          <p className="mt-4 max-w-md text-[17px] font-medium leading-[1.8] text-[#303841]/70">
          Do <span className="font-bold text-[#303841]">Python à nuvem</span>, da análise de dados aos{" "}
            <span className="font-bold text-[#303841]">agentes de IA </span>trabalho com todo o ciclo para tirar
            soluções escaláveis e de alta performance do papel.
          </p>
          <div className="mt-6 flex flex-wrap items-center gap-3">
            <Button className="h-12 rounded-[5px] px-7 text-[14px]">Ver Projetos</Button>
            <Button variant="outline" className="h-12 rounded-[5px] px-7 text-[14px]">
              Entrar em contato
            </Button>
          </div>
        </div>

        {/* Lado direito: órbitas */}
        <div className="relative flex h-full w-1/2 items-center justify-start overflow-hidden">
          <div className="relative flex h-[50rem] w-[50rem] translate-x-[50%] items-center justify-center">
            <div className="flex h-24 w-24 items-center justify-center rounded-full bg-[#D72323] shadow-[0_0_40px_rgba(215,35,35,0.45)]">
              <Brain className="h-12 w-12 text-[#EEEEEE]" />
            </div>

            {[...Array(orbitCount)].map((_, orbitIdx) => {
              const size = `${12 + orbitGap * (orbitIdx + 1)}rem`;
              const angleStep = (2 * Math.PI) / iconsPerOrbit;

              return (
                <div
                  key={orbitIdx}
                  className="animate-orbit absolute rounded-full border-2 border-dotted border-[#3A4750]/70"
                  style={{
                    width: size,
                    height: size,
                    animationDuration: `${40 + orbitIdx * 15}s`,
                  }}
                >
                  {iconConfigs
                    .slice(
                      orbitIdx * iconsPerOrbit,
                      orbitIdx * iconsPerOrbit + iconsPerOrbit,
                    )
                    .map((cfg, iconIdx) => {
                      const angle = iconIdx * angleStep;
                      const x = 50 + 50 * Math.cos(angle);
                      const y = 50 + 50 * Math.sin(angle);

                      return (
                        <div
                          key={iconIdx}
                          className="absolute rounded-full bg-[#303841] p-1.5 shadow-md"
                          style={{
                            left: `${x}%`,
                            top: `${y}%`,
                            transform: "translate(-50%, -50%)",
                          }}
                        >
                          <cfg.Icon
                            className="h-7 w-7"
                            style={{ color: cfg.color }}
                          />
                        </div>
                      );
                    })}
                </div>
              );
            })}
          </div>
        </div>
      </div>

    </div>
  );
}
