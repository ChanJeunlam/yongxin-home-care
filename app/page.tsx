"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Clock, MapPin, Phone, ArrowRight, Users, Home, Shield, ThumbsUp, Calendar, User } from "lucide-react"
import ParticleBackground from "@/components/particle-background"
import TestimonialSection from "@/components/testimonial-section"

export default function HomePage() {
  // 获取仓库名称，用于图片路径
  const basePath = process.env.NODE_ENV === "production" ? "/yongxin-home-care" : ""

  return (
    <div className="relative min-h-screen">
      {/* 粒子背景 */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <ParticleBackground />
      </div>

      {/* 首屏焦点区 */}
      <section className="relative pt-24 pb-16 px-4 md:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="flex flex-col items-center text-center max-w-3xl mx-auto">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold">
            <span className="text-[#FF7F50]">永馨家政</span>
            <span className="text-[#4A90E2]">，温暖相伴</span>
          </h1>
          <p className="mt-6 text-lg text-gray-700">
            已服务 <span className="text-[#FF7F50] font-bold">10,000+</span> 家庭，用心呵护{" "}
            <span className="text-[#4A90E2] font-bold">365</span> 天
          </p>
          <Button
            className="mt-8 bg-[#FF7F50] hover:bg-[#FF7F50]/90 text-white px-8 py-6 text-lg rounded-full shadow-lg transition-all duration-300 hover:shadow-xl hover:-translate-y-1"
            onClick={() => {
              document.getElementById("contact-section")?.scrollIntoView({ behavior: "smooth" })
            }}
          >
            立即预约
          </Button>
        </div>
      </section>

      {/* 数据统计 */}
      <section className="bg-[#FF7F50] py-10">
        <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="bg-[#FF7F50]/30 rounded-lg p-6 text-center text-white">
              <div className="flex justify-center mb-2">
                <Home className="h-8 w-8" />
              </div>
              <div className="text-2xl md:text-3xl font-bold">10000+</div>
              <div className="text-sm">服务家庭</div>
            </div>

            <div className="bg-[#FF7F50]/30 rounded-lg p-6 text-center text-white">
              <div className="flex justify-center mb-2">
                <Calendar className="h-8 w-8" />
              </div>
              <div className="text-2xl md:text-3xl font-bold">8年</div>
              <div className="text-sm">服务年限</div>
            </div>

            <div className="bg-[#FF7F50]/30 rounded-lg p-6 text-center text-white">
              <div className="flex justify-center mb-2">
                <ThumbsUp className="h-8 w-8" />
              </div>
              <div className="text-2xl md:text-3xl font-bold">98%</div>
              <div className="text-sm">满意度</div>
            </div>

            <div className="bg-[#FF7F50]/30 rounded-lg p-6 text-center text-white">
              <div className="flex justify-center mb-2">
                <User className="h-8 w-8" />
              </div>
              <div className="text-2xl md:text-3xl font-bold">50+</div>
              <div className="text-sm">专业阿姨</div>
            </div>
          </div>
        </div>
      </section>

      {/* 客户评价 */}
      <TestimonialSection />

      {/* 公司简介 */}
      <section className="py-16 px-4 md:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row gap-12 items-center">
          <div className="md:w-1/2">
            <h2 className="text-3xl font-bold mb-6">关于我们</h2>
            <p className="text-gray-700 mb-4">
              自2015年成立以来，我们始终坚持"专业、贴心、诚信"的服务理念，为湛江地区家庭提供高品质的家政服务。
            </p>
            <p className="text-gray-700 mb-6">
              我们的团队由经过严格筛选和专业培训的家政人员组成，确保每一位客户都能获得满意的服务体验。
            </p>
            <div className="flex gap-4">
              <Badge className="bg-[#FF7F50] hover:bg-[#FF7F50]/90">诚信企业认证</Badge>
              <Badge className="bg-[#4A90E2] hover:bg-[#4A90E2]/90">五星服务评级</Badge>
            </div>
            <Button className="mt-6" variant="outline" asChild>
              <Link href="/about">了解更多</Link>
            </Button>
          </div>
          <div className="md:w-1/2 bg-gradient-to-br from-[#FF7F50]/10 to-[#4A90E2]/10 p-1 rounded-2xl">
            <div className="aspect-video relative overflow-hidden rounded-xl">
              <img
                src={`${basePath}/professional-home-care-team.png`}
                alt="公司团队"
                className="object-cover w-full h-full"
              />
            </div>
          </div>
        </div>
      </section>

      {/* 联系信息 */}
      <section
        id="contact-section"
        className="py-16 px-4 md:px-6 lg:px-8 max-w-7xl mx-auto bg-[#F5F5F5]/80 backdrop-blur-sm rounded-3xl"
      >
        <h2 className="text-3xl font-bold text-center mb-12">联系我们</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <Card className="backdrop-blur-sm bg-white/70 border-none shadow-lg hover:shadow-xl transition-all duration-300">
            <CardContent className="pt-6">
              <div className="flex items-center mb-4">
                <MapPin className="mr-2 h-5 w-5 text-[#FF7F50]" />
                <h3 className="font-bold text-lg">地址</h3>
              </div>
              <p className="mb-4">湛江跃进路永馨家政-广东省湛江市赤坎区跃进路36号爱华百货底商F1</p>
              <Button variant="outline" size="sm" className="w-full mt-4" asChild>
                <a
                  href="https://map.baidu.com/poi/%E6%B0%B8%E9%A6%A8%E5%AE%B6%E6%94%BF/@12285893.80524301,2409437.568323286,19z?uid=a06c60621d110d4dbfa822b1&ugc_type=3&ugc_ver=1&device_ratio=1&compat=1&pcevaname=pc4.1&querytype=detailConInfo&da_src=shareurl"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  导航前往
                </a>
              </Button>
            </CardContent>
          </Card>

          <Card className="backdrop-blur-sm bg-white/70 border-none shadow-lg hover:shadow-xl transition-all duration-300">
            <CardContent className="pt-6">
              <div className="flex items-center mb-4">
                <Phone className="mr-2 h-5 w-5 text-[#4A90E2]" />
                <h3 className="font-bold text-lg">联系电话</h3>
              </div>
              <div className="space-y-2">
                <div className="flex items-center">
                  <span className="font-medium">主要电话: 18675959432</span>
                  <Badge variant="outline" className="ml-2">
                    推荐拨打
                  </Badge>
                </div>
                <p>备用电话: 13414966039</p>
                <p>备用电话: 18575959773</p>
              </div>
            </CardContent>
          </Card>

          <Card className="backdrop-blur-sm bg-white/70 border-none shadow-lg hover:shadow-xl transition-all duration-300">
            <CardContent className="pt-6">
              <div className="flex items-center mb-4">
                <Clock className="mr-2 h-5 w-5 text-[#FF7F50]" />
                <h3 className="font-bold text-lg">营业时间</h3>
              </div>
              <div className="space-y-2">
                <p className="font-medium">周一至周日: 09:30-18:30</p>
                <p className="text-sm text-muted-foreground">节假日正常营业</p>
              </div>
              <div className="w-full bg-gray-200 h-2 rounded-full overflow-hidden mt-4">
                <div className="bg-gradient-to-r from-[#FF7F50] to-[#4A90E2] h-full w-[60%]"></div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* 招工信息预览 */}
      <section className="py-16 px-4 md:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center mb-12">
          <h2 className="text-3xl font-bold">最新招工信息</h2>
          <Button variant="outline" asChild>
            <Link href="/jobs">
              查看全部
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Card className="backdrop-blur-sm bg-white/70 border-none shadow-lg hover:shadow-xl transition-all duration-300">
            <CardContent className="p-6">
              <div className="flex justify-between items-start mb-4">
                <h3 className="text-xl font-bold">住家育儿嫂</h3>
                <Badge className="bg-gradient-to-r from-[#4A90E2] to-[#FF7F50]">5500-6000元</Badge>
              </div>
              <p className="text-sm text-gray-500 mb-4">遂溪城 | 编号: #2333</p>
              <div className="space-y-2">
                <p className="flex items-center">
                  <Shield className="mr-2 h-4 w-4 text-[#4A90E2]" /> 家庭情况: 宝妈与8个月婴儿（需带睡）
                </p>
                <p className="flex items-center">
                  <Users className="mr-2 h-4 w-4 text-[#FF7F50]" /> 工作要求:
                </p>
                <ul className="list-disc pl-10 space-y-1 text-sm">
                  <li>50岁以下，有育儿经验</li>
                  <li>制作辅食、煮粥技能</li>
                  <li>性格耐心，4天/月休</li>
                </ul>
              </div>
              <div className="flex justify-between mt-6">
                <p className="text-sm text-muted-foreground">联系: 陈老师 18575959773</p>
                <Button size="sm">申请岗位</Button>
              </div>
            </CardContent>
          </Card>

          <Card className="backdrop-blur-sm bg-white/70 border-none shadow-lg hover:shadow-xl transition-all duration-300">
            <CardContent className="p-6">
              <div className="flex justify-between items-start mb-4">
                <h3 className="text-xl font-bold">老人陪护</h3>
                <Badge className="bg-gradient-to-r from-[#4A90E2] to-[#FF7F50]">4800-5200元</Badge>
              </div>
              <p className="text-sm text-gray-500 mb-4">赤坎区 | 编号: #2335</p>
              <div className="space-y-2">
                <p className="flex items-center">
                  <Shield className="mr-2 h-4 w-4 text-[#4A90E2]" /> 家庭情况: 75岁老人，行动不便
                </p>
                <p className="flex items-center">
                  <Users className="mr-2 h-4 w-4 text-[#FF7F50]" /> 工作要求:
                </p>
                <ul className="list-disc pl-10 space-y-1 text-sm">
                  <li>有护理经验，能做简单家务</li>
                  <li>有耐心，会做营养餐</li>
                  <li>需住家，每月休息4天</li>
                </ul>
              </div>
              <div className="flex justify-between mt-6">
                <p className="text-sm text-muted-foreground">联系: 李老师 18675959432</p>
                <Button size="sm">申请岗位</Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  )
}
