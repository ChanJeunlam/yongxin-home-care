import { Timeline, TimelineItem } from "@/components/timeline"
import { Heart, Users } from "lucide-react"

export default function AboutPage() {
  return (
    <div className="min-h-screen py-16 px-4 md:px-6 lg:px-8 max-w-7xl mx-auto">
      <div className="text-center mb-16">
        <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-[#FF7F50] to-[#4A90E2] bg-clip-text text-transparent">
          关于我们
        </h1>
        <p className="mt-4 text-xl text-gray-700 max-w-2xl mx-auto">专业家政服务，用心呵护每一个家庭</p>
      </div>

      {/* 品牌故事 */}
      <section className="mb-20">
        <h2 className="text-3xl font-bold mb-10 text-center">品牌故事</h2>
        <div className="flex flex-col lg:flex-row gap-12 items-center">
          <div className="lg:w-1/2">
            <Timeline>
              <TimelineItem year="2015" title="公司成立">
                在湛江市赤坎区成立，初期提供基础家政服务
              </TimelineItem>
              <TimelineItem year="2017" title="业务扩展">
                扩展服务范围，增加母婴护理和老人陪护专业服务
              </TimelineItem>
              <TimelineItem year="2020" title="获得认证">
                获得"诚信企业认证"，成为湛江市家政行业标杆
              </TimelineItem>
              <TimelineItem year="2022" title="数字化转型">
                推出线上预约系统，提升服务效率和客户体验
              </TimelineItem>
              <TimelineItem year="2023" title="持续发展">
                服务范围覆盖湛江全市，员工超过100人
              </TimelineItem>
            </Timeline>
          </div>
          <div className="lg:w-1/2">
            <div className="relative rounded-2xl overflow-hidden shadow-xl">
              <div className="absolute inset-0 bg-gradient-to-br from-[#FF7F50]/20 to-[#4A90E2]/20 z-10"></div>
              <img src="/home-care-team.png" alt="团队合影" className="w-full h-full object-cover" />
            </div>
            <div className="mt-6 text-center">
              <p className="text-gray-700 italic">"我们的使命是让每个家庭都能享受专业、贴心的家政服务"</p>
              <p className="mt-2 font-medium">— 陈乃杰，创始人</p>
            </div>
          </div>
        </div>
      </section>

      {/* 社会责任 */}
      <section className="mb-20 py-16 px-6 bg-[#F5F5F5]/80 backdrop-blur-sm rounded-3xl">
        <h2 className="text-3xl font-bold mb-10 text-center">社会责任</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white rounded-lg p-6 shadow-lg">
            <div className="text-center mb-4">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-[#FF7F50]/10 mb-4">
                <Heart className="h-8 w-8 text-[#FF7F50]" />
              </div>
              <h3 className="text-xl font-bold">关爱老人计划</h3>
            </div>
            <div className="relative h-4 bg-gray-200 rounded-full overflow-hidden mt-6 mb-2">
              <div className="absolute top-0 left-0 h-full bg-[#FF7F50] w-[75%]"></div>
            </div>
            <div className="flex justify-between text-sm">
              <span>目标: 150人</span>
              <span className="font-medium">已完成: 112人</span>
            </div>
            <p className="mt-4 text-gray-700">为孤寡老人提供免费家政服务，包括日常照料、心理陪伴和健康监测。</p>
          </div>

          <div className="bg-white rounded-lg p-6 shadow-lg">
            <div className="text-center mb-4">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-[#4A90E2]/10 mb-4">
                <Users className="h-8 w-8 text-[#4A90E2]" />
              </div>
              <h3 className="text-xl font-bold">家政技能培训</h3>
            </div>
            <div className="relative h-4 bg-gray-200 rounded-full overflow-hidden mt-6 mb-2">
              <div className="absolute top-0 left-0 h-full bg-[#4A90E2] w-[60%]"></div>
            </div>
            <div className="flex justify-between text-sm">
              <span>目标: 200人</span>
              <span className="font-medium">已完成: 120人</span>
            </div>
            <p className="mt-4 text-gray-700">为低收入家庭妇女提供免费家政技能培训，帮助她们获得就业机会。</p>
          </div>

          <div className="bg-white rounded-lg p-6 shadow-lg">
            <div className="text-center mb-4">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-[#FF7F50]/10 mb-4">
                <Users className="h-8 w-8 text-[#FF7F50]" />
              </div>
              <h3 className="text-xl font-bold">特殊家庭援助</h3>
            </div>
            <div className="relative h-4 bg-gray-200 rounded-full overflow-hidden mt-6 mb-2">
              <div className="absolute top-0 left-0 h-full bg-[#FF7F50] w-[40%]"></div>
            </div>
            <div className="flex justify-between text-sm">
              <span>目标: 50家庭</span>
              <span className="font-medium">已完成: 20家庭</span>
            </div>
            <p className="mt-4 text-gray-700">
              为特殊困难家庭提供长期免费家政服务支持，包括残障人士家庭和重病患者家庭。
            </p>
          </div>
        </div>
      </section>
    </div>
  )
}
