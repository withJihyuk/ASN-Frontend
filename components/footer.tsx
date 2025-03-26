import Link from "next/link"

export default function Footer() {
  return (
    <footer className="bg-gray-100 py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <span className="font-bold text-xl">JihyukLab</span>
            </div>
            <p className="text-sm text-gray-600">
              모두를 위한 서비스를 제공합니다.
              <br/>
              기회의 평등을 추구합니다.
            </p>
          </div>

          <div>
            <h3 className="font-semibold mb-4">바로가기</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/about" className="text-gray-600 hover:text-blue-600">
                  제공사   정보
                </Link>
              </li>
              <li>
                <Link href="/services" className="text-gray-600 hover:text-blue-600">
                  서비스
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-gray-600 hover:text-blue-600">
                  연락하기
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-4">서비스</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/services/consulting" className="text-gray-600 hover:text-blue-600">
                  컨테이너 호스팅
                </Link>
              </li>
              <li>
                <Link href="/services/infrastructure" className="text-gray-600 hover:text-blue-600">
                  고성능 네트워크
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-4">연락하기</h3>
            <address className="not-italic text-sm text-gray-600 space-y-2">
              <p>info@mya.ong</p>
            </address>
          </div>
        </div>

        <div className="border-t mt-8 pt-8 text-sm text-gray-600 flex flex-col md:flex-row justify-between items-center">
          <p>© 2025 JihyukLab. All rights reserved.</p>
          <div className="flex gap-4 mt-4 md:mt-0">
            <Link href="/privacy" className="hover:text-blue-600">
              개인정보처리방침
            </Link>
            <Link href="/terms" className="hover:text-blue-600">
              이용약관
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}

