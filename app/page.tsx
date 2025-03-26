import Link from "next/link"
import { ArrowRight, CreditCard, Globe, Server, Users } from "lucide-react"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"

export default function Home() {
  return (
    <div className="min-h-screen bg-white bg-[linear-gradient(#f0f0f0_1px,transparent_1px),linear-gradient(90deg,#f0f0f0_1px,transparent_1px)] bg-[size:40px_40px] scroll-smooth">
      <Navbar />

      <main className="pt-24">
        <section className="container mx-auto px-4 py-32 background">
          <div className="grid md:grid-rows-2 gap-16 items-center">
            <div>
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900">
                Beyond Simple
              </h1>
              <h1 className="text-blue-500 mb-5">
                Deploy In 7 minute
              </h1>
              <p className="text-base md:text-lg text-gray-700 mb-10 max-w-lg">
                게임 서버, 프로덕트 배포, 비지니스 서비스 등 다양한 인프라 기반 서비스
                <br/>
                이젠 저희와 함께하세요
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                    href="/solutions"
                    className="bg-blue-500 text-white px-6 py-3 rounded flex items-center gap-2 hover:bg-gray-200 transition-colors font-medium"
                >
                  서비스 확인하기
                  <ArrowRight className="w-5 h-5"/>
                </Link>
                <Link
                    href="/consultation"
                    className="border border-gray-900 text-gray-900 px-6 py-3 rounded hover:bg-gray-100 transition-colors font-medium"
                >
                  견적 요청하기
                </Link>

              </div>
            </div>
          </div>

          <div className="flex justify-center mt-16">
            <button aria-label="Scroll down" className="animate-bounce">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="text-gray-400"
              >
                <path d="M12 5v14"></path>
                <path d="m19 12-7 7-7-7"></path>
              </svg>
            </button>
          </div>
        </section>

        <section className="py-24 bg-gray-50">
          <div className="container mx-auto px-4">
            <h2 className="text-2xl md:text-3xl font-bold text-center mb-12">제공중인 서비스</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="text-xl font-semibold mb-2">고성능 네트워크</h3>
                <p className="text-gray-600 mb-4">
                  고성능 네트워크를 통한 각 리전에 따라 서비스 최적화를 제공합니다.
                  <br/>
                  DDoS mitigation, Global Accelerator 기능을 제공합니다.
                </p>
                <Link
                    href="/services/infrastructure"
                    className="text-blue-600 hover:underline flex items-center gap-1 font-medium"
                >
                  알아보기
                  <ArrowRight className="w-4 h-4"/>
                </Link>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="text-xl font-semibold mb-2">컨테이너 기반 호스팅</h3>
                <p className="text-gray-600 mb-4">
                  컨테이너 기반의 확장 가능한 호스팅을 제공합니다.
                  <br/>
                  무중단 배포, HA 등 다양한 기능을 제공합니다.
                </p>
                <Link
                    href="/services/infrastructure"
                    className="text-gray-600 hover:underline flex items-center gap-1 font-medium"
                >
                  출시 예정
                  {/*<ArrowRight className="w-4 h-4"/>*/}
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer/>
    </div>
  )
}

