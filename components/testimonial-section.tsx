"use client"

import { useState } from "react"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Star } from "lucide-react"

const testimonials = [
  {
    id: 1,
    name: "李女士",
    location: "湛江赤坎区",
    avatar: "/woman-portrait-1.png",
    rating: 5,
    text: "阿姨非常负责任，对我家老人照顾得很周到，不仅做饭可口还会帮打扫卫生，特别感谢爱家家政为我们提到这么好的阿姨！",
  },
  {
    id: 2,
    name: "张先生",
    location: "湛江开发区",
    avatar: "/thoughtful-man-portrait.png",
    rating: 5,
    text: "服务非常专业，预约后很快就安排了阿姨上门，深度保洁做得非常到位，特别是厨房油污清理得一干二净，下次还会继续选择！",
  },
  {
    id: 3,
    name: "王女士",
    location: "湛江霞山区",
    avatar: "/woman-portrait-2.png",
    rating: 5,
    text: "月嫂非常有经验，不仅照顾宝宝很专业，还给我提供了很多育儿建议，让我这个新手妈妈少走了很多弯路，非常感谢！",
  },
]

export default function TestimonialSection() {
  const [activeIndex, setActiveIndex] = useState(0)

  return (
    <section className="py-16 px-4 md:px-6 lg:px-8 max-w-7xl mx-auto">
      <h2 className="text-3xl font-bold text-center mb-4">客户评价</h2>
      <p className="text-center text-gray-600 mb-12">听听我们的客户怎么说，他们的满意是我们最大的动力</p>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {testimonials.map((testimonial, index) => (
          <div key={testimonial.id} className="relative">
            <div className="absolute -top-3 -left-3 text-[#FF7F50] text-6xl opacity-20">"</div>
            <div className="bg-white rounded-lg p-6 shadow-md relative z-10">
              <div className="flex items-center mb-4">
                <Avatar className="h-12 w-12 mr-4 border">
                  <AvatarImage src={testimonial.avatar || "/placeholder.svg"} alt={testimonial.name} />
                  <AvatarFallback>{testimonial.name.charAt(0)}</AvatarFallback>
                </Avatar>
                <div>
                  <div className="font-medium">{testimonial.name}</div>
                  <div className="text-sm text-gray-500">{testimonial.location}</div>
                  <div className="flex mt-1">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <Star
                        key={i}
                        className={`h-4 w-4 ${
                          i < testimonial.rating ? "text-[#FF7F50] fill-[#FF7F50]" : "text-gray-300"
                        }`}
                      />
                    ))}
                  </div>
                </div>
              </div>
              <p className="text-gray-700">{testimonial.text}</p>
            </div>
          </div>
        ))}
      </div>

      <div className="text-center mt-8">
        <a href="#" className="text-[#FF7F50] hover:text-[#FF7F50]/80 inline-flex items-center">
          查看更多评价
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-4 w-4 ml-1"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </a>
      </div>
    </section>
  )
}
