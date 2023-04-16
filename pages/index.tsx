import type { NextPage } from "next";
import Head from "next/head";
import React from "react";
import SectionComponent from "../components/sectionComponent";
import { HomeCointainer } from "../styles/components/home";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";

const Home: NextPage = () => {
  return (
    <HomeCointainer>
      <Head>
        <title>Educa Kids</title>
        <meta
          name="description"
          content="Potencialize a Alfabetização do seu Filho ainda em 2023"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="flex justify-start items-start flex-col w-full">
        <section className="pb-12 md:pb-5 w-full bg-gradient-to-b from-[#5CE1E6] to-[#8C52FF] via-35% via-[#7A88F5]  p-5">
          <nav className="w-full flex justify-start items-center mt-1 md:justify-center md:flex-col">
            <img src="/logo.png" alt="" className="mr-3"></img>
            <h1 className="text-white text-3xl font-bold">EDUCA KIDS</h1>
          </nav>

          <div className="mt-14 md:flex md:w-full md:justify-center">
            <h3 className="text-white text-3xl font-bold ml-6 md:ml-0 max-w-[600px] md:text-center">
              <span className="text-[#FFE70D]">
                Potencialize a Alfabetização
              </span>{" "}
              do seu Filho ainda em 2023
            </h3>
          </div>

          <div className="w-full flex items-end flex-col md:items-center">
            <p className="text-right mt-5 max-w-[600px] md:text-center">
              Educa Kids Oferece{" "}
              <span className="text-[#FFE70D]">MAIS DE 600 ATIVIDADES</span>{" "}
              focadas em desenvolver e potencializar a alfabetização dos alunos,
              além de outras atividades bônus!
            </p>
            <p className="mt-5 text-[#472192] font-bold">
              Atividades conforme a BNCC
            </p>
          </div>
          <div className="flex w-full justify-center mt-10">
            <img src="/livro.png" alt="" className="w-full max-w-[350px]"></img>
          </div>
        </section>
        <section className="py-12 flex flex-col items-center w-full bg-gradient-to-b to-[#5CE1E6] from-[#8C52FF] via-65% via-[#7A88F5]  p-5">
          <div className="flex flex-col justify-center items-center max-w-[268px]">
            <span className="flex self-start">De 97,00 por apenas 5x</span>
            <span className=" text-7xl font-bold drop-shadow-lg">R$ 5,89</span>
            <span className="self-end"> ou 27,00 a vista</span>
          </div>
          <button className="mt-10 rounded-full text-[#472192] bg-[#FFC700] px-7 py-4 text-4xl font-bold">
            EU QUERO
          </button>
          <img
            alt="garantia1"
            src="/garantia1.png"
            className="mt-5 w-full max-w-[230px]"
          ></img>
        </section>
        <section className="py-12 flex flex-col items-center w-full bg-gradient-to-b from-[#5CE1E6] to-[#8C52FF] via-35% via-[#7A88F5]  p-5">
          <div className="flex items-center flex-col">
            <img src="/logo.png" alt="" className=""></img>
            <h2 className="uppercase font-bold text-2xl text-center ">
              Veja como é simples
            </h2>
          </div>

          <div className="flex flex-col justify-start itens-center mt-5 gap-y-4 w-full max-w-[700px]">
            <SectionComponent
              image="/s1/1.png"
              description="O material Chega no Seu Email"
            />
            <SectionComponent
              image="/s1/2.png"
              description="Você Imprime o Material"
            />
            <SectionComponent
              image="/s1/3.png"
              description="Seu filho fazas atividades"
            />
          </div>
        </section>

        <section className="py-12 flex flex-col items-center w-full bg-gradient-to-b to-[#5CE1E6] from-[#8C52FF] via-65% via-[#7A88F5]  p-5">
          <div className="flex items-center flex-col">
            <img src="/logo.png" alt="" className=""></img>
            <h2 className="uppercase font-bold text-2xl text-center ">
              COMO É POR DENTRO...
            </h2>
          </div>

          <div className="flex flex-col justify-start itens-center mt-5 gap-y-4 w-full max-w-[700px]">
            <SectionComponent
              image="/s2/1.png"
              description="Material de Coordenação Motora"
            />
            <SectionComponent
              image="/s2/2.png"
              description="Vocabulário e Comunicação"
            />
            <SectionComponent
              image="/s2/3.png"
              description="Vogais e Consoantes"
            />
            <SectionComponent image="/s2/4.png" description="Fonemas" />
            <SectionComponent
              image="/s2/5.png"
              description="Silabário e Formação de Palavras"
            />
          </div>
        </section>

        <section className="py-12 flex flex-col items-center  w-full bg-gradient-to-b from-[#5CE1E6] to-[#8C52FF] via-35% via-[#7A88F5]  p-5">
          <div className="flex items-center flex-col">
            <img src="/logo.png" alt="" className=""></img>
            <h2 className="uppercase font-bold text-2xl text-center ">
              BENEFÍCIOS DO PRODUTO
            </h2>
          </div>

          <div className="flex flex-col justify-center itens-center mt-5 gap-y-4 w-full max-w-[700px]">
            <SectionComponent
              image="/s2/5.png"
              description="Aumento da Capacidade Cognitiva"
            />
            <SectionComponent
              image="/s3/2.png"
              description="Aumento do desempenho escolar"
            />
            <SectionComponent
              image="/s3/3.png"
              description="Praticidade pra Mamãe ou Papai"
            />
            <SectionComponent
              image="/s3/4.png"
              description="Nivelamento de acordo com a BNCC"
            />
          </div>
        </section>

        <section className="py-12 flex flex-col items-center w-full bg-gradient-to-b to-[#5CE1E6] from-[#8C52FF] via-65% via-[#7A88F5]  p-5">
          <div className="flex items-center flex-col w-full">
            <img src="/logo.png" alt="" className=""></img>
            <h2 className="uppercase font-bold text-2xl text-center ">
              ADQUIRINDO HOJE, VOCÊ LEVA:
            </h2>
            <div className="w-full my-10">
              <Splide
                aria-label="My Favorite Images"
                options={{
                  rewind: true,
                  padding: "50px",

                  gap: "20px",
                  perPage: 3,
                  breakpoints: {
                    870: {
                      perPage: 1,
                    },
                  },
                  autoScroll: {
                    speed: 2,
                  },
                }}
              >
                <SplideSlide>
                  <div className="w-full bg-white h-[350px] rounded-3xl "></div>
                </SplideSlide>
                <SplideSlide>
                  <div className="w-full bg-white h-[350px] rounded-3xl "></div>
                </SplideSlide>
                <SplideSlide>
                  <div className="w-full bg-white h-[350px] rounded-3xl "></div>
                </SplideSlide>
              </Splide>
            </div>
          </div>

          <div className="w-full flex items-center flex-col">
            <img src="/logo.png" alt="" className=""></img>
            <h2 className="uppercase font-bold text-2xl text-center ">
              DEPOIMENTOS
            </h2>
            <div className="w-full my-10">
              <Splide
                aria-label="My Favorite Images"
                options={{
                  rewind: true,
                  padding: "50px",

                  gap: "20px",
                  perPage: 3,
                  breakpoints: {
                    870: {
                      perPage: 1,
                    },
                  },
                  autoScroll: {
                    speed: 2,
                  },
                }}
              >
                <SplideSlide>
                  <div className="w-full bg-white h-[350px] rounded-3xl "></div>
                </SplideSlide>
                <SplideSlide>
                  <div className="w-full bg-white h-[350px] rounded-3xl "></div>
                </SplideSlide>
                <SplideSlide>
                  <div className="w-full bg-white h-[350px] rounded-3xl "></div>
                </SplideSlide>
              </Splide>
            </div>
          </div>
        </section>

        <section className="py-12 flex flex-col items-center w-full bg-gradient-to-b from-[#5CE1E6] to-[#E65CD0] via-[#8C52FF]  p-5">
          <img
            alt="Garantia Selo"
            src="/garantia2.png"
            className="w-full max-w-[250px]"
          ></img>
          <p className="text-center  text-2xl font-bold uppercase mt-5">
            SATISFAÇÃO 100% GARANTIDA
          </p>
          <p className="text-center max-w-[500px] mt-3">
            Sabemos da qualidade do nossa Apostila Universo Kids, e por este
            motivo liberamos a garantia de 7 dias! Se neste período você
            utilizar o nosso material e não gostar, basta entrar em contato para
            pedir o reembolso de 100% do valor investido!
          </p>

          <div className="mt-8">
            <div className="flex justify-center items-center gap-x-5 ">
              <img src="/logo.png" alt="" className=""></img>
              <h3 className="font-bold text-xl text-center">
                OFERTA EXCLUSIVA
              </h3>
              <img src="/logo.png" alt="" className=""></img>
            </div>
            <p className="mt-5 text-[#FFE70D] text-center font-bold text-lg">
              O Kit EDUCA KIDS está com condições ESPECIAIS
            </p>
            <section className="mt-5 bg-white rounded-xl w-full max-w-[500px] p-5 flex flex-col items-center">
              <p className="uppercase font-bold text-lg text-[#472192] text-center mb-3  ">
                SOMENTE HOJE VOCÊ LEVA +600 ATIVIDADES DE ALFABETIZAÇÃO COM + de
                72% DE DESCONTO
              </p>
              <p className="text-red-500 text-center font-semibold">
                de R$ 97,00 <br /> por apenas 5x
              </p>
              <h4 className="text-6xl text-green-500 mt-3 font-bold text-center">
                R$ 5,89
              </h4>
              <span className="text-green-600 font-semibold text-center mt-2">
                ou R$ 27,00 à vista
              </span>
              <span className="font-bold text-2xl text-[#472192] text-center my-3">
                Pagamento Único!
              </span>
              <div className="flex flex-col items-start gap-y-2">
                <p className="text-black font-semibold">
                  😍 SUPER APOSTILA ATIVIDADES <br />
                </p>
                <p className="text-black font-semibold">
                  😍 15 ATIVIDADES COORDENAÇÃO MOTORA
                </p>
                <p className="text-black font-semibold">
                  😍 +DE 42 ATIVIDADES DE PORTUGUÊS
                </p>
                <p className="text-black font-semibold">
                  😍 +DE 20 ATIVIDADES DE MATEMÁTICA
                </p>
                <p className="text-black font-semibold">
                  😍 +23 ATIVIDADES DO ALFABETO
                </p>
                <p className="text-black font-semibold">
                  😍 ATIVIDADES DO BEABÁ
                </p>
                <p className="text-black font-semibold">
                  😍 Bônus 1: BÔNUS 70 ATIVIDADES DE PASSATEMPO
                </p>
                <p className="text-black font-semibold">
                  😍 Bônus 2: BÔNUS LIVRO INDICADO DO MEC
                </p>
                <p className="text-black font-semibold">
                  😍 Bônus 3: JOGOS ALFABÉTICOS
                </p>
                <p className="text-black font-semibold">😍 Acesso Vitalício</p>
                <p className="text-black font-semibold">
                  😍 7 dias de garantia
                </p>
              </div>
              <button className="mt-10 rounded-full  bg-[#FFC700] px-16 mb-5 py-4 ">
                <span className="text-[#472192] text-xl font-bold">
                  RECEBER MEU <br /> DESCONTO
                </span>
              </button>
            </section>
          </div>
          <footer className="flex flex-col items-center gap-y-2 mt-10">
            <p>Educa Kids</p>
            <p>
              Copyright © {new Date().getFullYear()}. Todos os direitos
              reservados.
            </p>
            <p className="underline">
              Políticas de Privacidade | Termos de Uso
            </p>
          </footer>
        </section>
      </main>
    </HomeCointainer>
  );
};

export default Home;
