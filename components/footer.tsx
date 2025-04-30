import Link from "next/link"
import { Heart, MapPin, Phone, Clock } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-[#F5F5F5] py-12 px-4 md:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
        <div>
          <div className="flex items-center gap-2 mb-4">
            <div className="flex items-center justify-center w-10 h-10 rounded-full bg-gradient-to-r from-[#FF7F50] to-[#4A90E2]">
              <Heart className="h-5 w-5 text-white" />
            </div>
            <span className="font-bold text-xl">永馨家政</span>
          </div>
          <p className="text-gray-600 mb-4">专业家政服务，用心呵护每一个家庭</p>
          <div className="flex space-x-4">
            <Link href="#" className="text-gray-600 hover:text-[#FF7F50]">
              <span className="sr-only">微信</span>
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
                className="lucide lucide-wechat"
              >
                <path d="M9.5 9.5c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5h.5c1.1 0 2-.9 2-2s-.9-2-2-2H7.82C6.26 2.5 5 3.76 5 5.32V12c0 2.76 2.24 5 5 5h4c2.76 0 5-2.24 5-5v-2.08c0-1.24-1.01-2.25-2.25-2.25H15c-.55 0-1 .45-1 1v.5c0 .28.22.5.5.5h1.75c.41 0 .75.34.75.75V12c0 1.66-1.34 3-3 3h-4c-1.66 0-3-1.34-3-3V5.32c0-.17.14-.32.32-.32H10c0 .83.67 1.5 1.5 1.5s1.5-.67 1.5-1.5-.67-1.5-1.5-1.5h-.68c-.17 0-.32.14-.32.32V6c0 .55.45 1 1 1h1.5c.83 0 1.5.67 1.5 1.5s-.67 1.5-1.5 1.5H9.5z" />
              </svg>
            </Link>
            <Link href="#" className="text-gray-600 hover:text-[#FF7F50]">
              <span className="sr-only">QQ</span>
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
                className="lucide lucide-message-circle"
              >
                <path d="M7.9 20A9 9 0 1 0 4 16.1L2 22Z" />
              </svg>
            </Link>
          </div>
        </div>

        <div>
          <h3 className="font-bold text-lg mb-4">快速链接</h3>
          <ul className="space-y-2">
            <li>
              <Link href="/" className="text-gray-600 hover:text-[#FF7F50]">
                首页
              </Link>
            </li>
            <li>
              <Link href="/about" className="text-gray-600 hover:text-[#FF7F50]">
                关于我们
              </Link>
            </li>
            <li>
              <Link href="/jobs" className="text-gray-600 hover:text-[#FF7F50]">
                招工信息
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <h3 className="font-bold text-lg mb-4">快速链接</h3>
          <ul className="space-y-2">
            <li>
              <Link href="/about" className="text-gray-600 hover:text-[#FF7F50]">
                关于我们
              </Link>
            </li>
            <li>
              <Link href="/jobs" className="text-gray-600 hover:text-[#FF7F50]">
                招工信息
              </Link>
            </li>
            <li>
              <Link href="#" className="text-gray-600 hover:text-[#FF7F50]">
                服务条款
              </Link>
            </li>
            <li>
              <Link href="#" className="text-gray-600 hover:text-[#FF7F50]">
                隐私政策
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <h3 className="font-bold text-lg mb-4">联系我们</h3>
          <ul className="space-y-3">
            <li className="flex items-start">
              <MapPin className="h-5 w-5 mr-2 text-[#FF7F50] mt-0.5" />
              <a
                href="https://map.baidu.com/poi/%E6%B0%B8%E9%A6%A8%E5%AE%B6%E6%94%BF/@12285893.80524301,2409437.568323286,19z?uid=a06c60621d110d4dbfa822b1&ugc_type=3&ugc_ver=1&device_ratio=1&compat=1&pcevaname=pc4.1&querytype=detailConInfo&da_src=shareurl"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 hover:text-[#FF7F50]"
              >
                湛江跃进路永馨家政-广东省湛江市赤坎区跃进路36号爱华百货底商F1
              </a>
            </li>
            <li className="flex items-center">
              <Phone className="h-5 w-5 mr-2 text-[#FF7F50]" />
              <span className="text-gray-600">18675959432</span>
            </li>
            <li className="flex items-center">
              <Clock className="h-5 w-5 mr-2 text-[#FF7F50]" />
              <span className="text-gray-600">09:30-18:30</span>
            </li>
          </ul>
        </div>
      </div>

      <div className="mt-10 pt-6 border-t border-gray-200 text-center text-gray-500 text-sm">
        <p>&copy; {new Date().getFullYear()} 永馨家政. 保留所有权利.</p>
      </div>
    </footer>
  )
}
