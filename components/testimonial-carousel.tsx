"use client"

import { useState, useEffect } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Star } from "lucide-react"

const testimonials = [
  {
    id: 1,
    name: "张女士",
    avatar: "/woman-portrait-1.png",
    rating: 5,
    text: "非常专业的月嫂服务，让我在产后恢复期得到了很好的照顾，宝宝也很健康。",
  },
  {
    id: 2,
    name: "王先生",
    avatar: "/placeholder.svg?height=40&width=40&query=man portrait 1",
    rating: 5,
    text: "请了老人陪护服务，阿姨非常有耐心，我父亲很喜欢她，家里也收拾得很干净。",
  },
  {
    id: 3,
    name: "李女士",
    avatar: "/placeholder.svg?height=40&width=40&query=woman portrait 2",
    rating: 4,
    text: "深度保洁服务很到位，特别是厨房的油污清理得非常干净，以后还会继续预约。",
  },
  {
    id: 4,
    name: "赵先生",
    avatar: "/placeholder.svg?height=40&width=40&query=man portrait 2",
    rating: 5,
    text: "住家保姆服务很贴心，不仅照顾好了家里的老人，还把家务都打理得井井有条。",
  },
]

export default function TestimonialCarousel() {
  const [activeIndex, setActiveIndex] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((current) => (current + 1) % testimonials.length)
    }, 5000)

    return () => clearInterval(interval)
  }, [])

  return (
    <div className="relative">
      <div className="overflow-hidden">
        <div
          className="flex transition-transform duration-500 ease-in-out"
          style={{ transform: `translateX(-${activeIndex * 100}%)` }}
        >
          {testimonials.map((testimonial) => (
            <div key={testimonial.id} className="w-full flex-shrink-0 px-4">
              <Card className="backdrop-blur-sm bg-white/70 border-none shadow-lg">
                <CardContent className="pt-6">
                  <div className="flex items-center mb-4">
                    <Avatar className="h-10 w-10 mr-3 border">
                      <AvatarImage src={testimonial.avatar || "/placeholder.svg"} alt={testimonial.name} />
                      <AvatarFallback>{testimonial.name.charAt(0)}</AvatarFallback>
                    </Avatar>
                    <div>
                      <div className="font-medium">{testimonial.name}</div>
                      <div className="flex">
                        {Array.from({ length: 5 }).map((_, i) => (
                          <Star
                            key={i}
                            className={`h-4 w-4 ${i < testimonial.rating ? "text-[#FF7F50] fill-[#FF7F50]" : "text-gray-300"}`}
                          />
                        ))}
                      </div>
                    </div>
                  </div>
                  <p className="text-gray-700">{testimonial.text}</p>
                </CardContent>
              </Card>
            </div>
          ))}
        </div>
      </div>

      <div className="flex justify-center mt-4 space-x-2">
        {testimonials.map((_, index) => (
          <button
            key={index}
            className={`h-2 w-2 rounded-full transition-colors ${
              activeIndex === index ? "bg-[#FF7F50]" : "bg-gray-300"
            }`}
            onClick={() => setActiveIndex(index)}
          />
        ))}
      </div>
    </div>
  )
}
