"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { Slider } from "@/components/ui/slider"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Search, MapPin, DollarSign, Filter, Users, Clock, Home, Baby, Heart, Sparkles } from "lucide-react"

// 模拟招工信息数据
const jobsData = [
  // 母婴相关 - 遂溪县
  {
    id: "2333",
    title: "住家育儿嫂",
    location: "遂溪县",
    salary: "5500-6000",
    salaryRange: [5500, 6000],
    family: "宝妈与8个月婴儿（需带睡）",
    requirements: ["50岁以下，有育儿经验", "制作辅食、煮粥技能", "性格耐心，4天/月休"],
    contact: "陈老师 18575959773",
    tags: ["住家", "带睡", "育儿"],
    category: "baby",
  },
  {
    id: "2337",
    title: "月嫂",
    location: "遂溪县",
    salary: "7000-8000",
    salaryRange: [7000, 8000],
    family: "新生儿家庭，需要专业月嫂",
    requirements: ["有3年以上月嫂经验", "持有母婴护理证书", "负责新生儿护理和产妇照顾"],
    contact: "刘女士 18575959773",
    tags: ["月嫂", "新生儿", "专业"],
    category: "baby",
  },

  // 母婴相关 - 赤坎区
  {
    id: "2401",
    title: "双胞胎育儿嫂",
    location: "赤坎区",
    salary: "6500-7500",
    salaryRange: [6500, 7500],
    family: "双职工家庭，6个月双胞胎",
    requirements: ["有双胞胎带养经验", "能做营养辅食", "有耐心，责任心强"],
    contact: "王女士 18675959432",
    tags: ["双胞胎", "育儿", "辅食"],
    category: "baby",
  },
  {
    id: "2402",
    title: "产妇护理",
    location: "赤坎区",
    salary: "6000-7000",
    salaryRange: [6000, 7000],
    family: "初产妇，需要专业护理",
    requirements: ["有产妇护理经验", "会做月子餐", "细心负责"],
    contact: "李女士 13414966039",
    tags: ["产妇", "月子", "护理"],
    category: "baby",
  },

  // 母婴相关 - 霞山区
  {
    id: "2403",
    title: "婴儿早教师",
    location: "霞山区",
    salary: "5000-6000",
    salaryRange: [5000, 6000],
    family: "双职工家庭，1岁宝宝",
    requirements: ["有早教经验", "懂得婴幼儿发育规律", "有亲和力"],
    contact: "张先生 18675959432",
    tags: ["早教", "婴儿", "发育"],
    category: "baby",
  },
  {
    id: "2404",
    title: "幼儿陪护",
    location: "霞山区",
    salary: "4500-5500",
    salaryRange: [4500, 5500],
    family: "3岁幼儿，需要日常照料",
    requirements: ["有幼儿照料经验", "性格开朗", "会简单英语教学优先"],
    contact: "陈女士 18575959773",
    tags: ["幼儿", "陪护", "教育"],
    category: "baby",
  },

  // 母婴相关 - 麻章区
  {
    id: "2405",
    title: "高级月嫂",
    location: "麻章区",
    salary: "8000-9000",
    salaryRange: [8000, 9000],
    family: "高端小区，剖腹产妈妈",
    requirements: ["8年以上经验", "持有高级母婴护理证", "会小儿推拿"],
    contact: "黄女士 18675959432",
    tags: ["高级", "月嫂", "推拿"],
    category: "baby",
  },
  {
    id: "2406",
    title: "双胞胎月嫂",
    location: "麻章区",
    salary: "9000-10000",
    salaryRange: [9000, 10000],
    family: "双胞胎新生儿家庭",
    requirements: ["有双胞胎护理经验", "能24小时照料", "有医护背景优先"],
    contact: "林先生 13414966039",
    tags: ["双胞胎", "月嫂", "24小时"],
    category: "baby",
  },

  // 母婴相关 - 开发区
  {
    id: "2407",
    title: "育儿嫂+家务",
    location: "开发区",
    salary: "5500-6500",
    salaryRange: [5500, 6500],
    family: "三口之家，2岁宝宝",
    requirements: ["照顾宝宝为主", "兼做家务", "有驾照优先"],
    contact: "吴女士 18575959773",
    tags: ["育儿", "家务", "全职"],
    category: "baby",
  },
  {
    id: "2408",
    title: "婴儿游泳师",
    location: "开发区",
    salary: "6000-7000",
    salaryRange: [6000, 7000],
    family: "高端家政公司招聘",
    requirements: ["持有婴儿游泳证书", "会婴儿抚触", "形象气质佳"],
    contact: "赵经理 18675959432",
    tags: ["游泳", "抚触", "专业"],
    category: "baby",
  },

  // 母婴相关 - 坡头区
  {
    id: "2409",
    title: "育儿嫂",
    location: "坡头区",
    salary: "5000-6000",
    salaryRange: [5000, 6000],
    family: "单亲爸爸，1岁宝宝",
    requirements: ["有育儿经验", "性格温和", "会做儿童餐"],
    contact: "刘先生 18675959432",
    tags: ["育儿", "单亲家庭", "儿童餐"],
    category: "baby",
  },
  {
    id: "2410",
    title: "临时育儿嫂",
    location: "坡头区",
    salary: "200-300/天",
    salaryRange: [4000, 6000],
    family: "双职工家庭，临时需要",
    requirements: ["可灵活安排时间", "经验丰富", "有责任心"],
    contact: "郑女士 13414966039",
    tags: ["临时", "育儿", "灵活"],
    category: "baby",
  },

  // 母婴相关 - 雷州市
  {
    id: "2411",
    title: "住家育儿嫂",
    location: "雷州市",
    salary: "5000-5500",
    salaryRange: [5000, 5500],
    family: "三口之家，9个月宝宝",
    requirements: ["有育儿经验", "会做辅食", "性格开朗"],
    contact: "陈女士 18575959773",
    tags: ["住家", "育儿", "辅食"],
    category: "baby",
  },
  {
    id: "2412",
    title: "月嫂",
    location: "雷州市",
    salary: "6000-7000",
    salaryRange: [6000, 7000],
    family: "预产期下个月，提前预约",
    requirements: ["有经验", "持有证书", "会做月子餐"],
    contact: "李女士 18675959432",
    tags: ["月嫂", "月子餐", "预约"],
    category: "baby",
  },

  // 母婴相关 - 徐闻县
  {
    id: "2413",
    title: "育儿嫂",
    location: "徐闻县",
    salary: "4500-5000",
    salaryRange: [4500, 5000],
    family: "三口之家，1岁半宝宝",
    requirements: ["有经验", "会哄孩子", "性格温和"],
    contact: "张女士 13414966039",
    tags: ["育儿", "哄孩子", "温和"],
    category: "baby",
  },
  {
    id: "2414",
    title: "月嫂+育儿",
    location: "徐闻县",
    salary: "6000-6500",
    salaryRange: [6000, 6500],
    family: "二胎家庭，新生儿和3岁孩子",
    requirements: ["有带多个孩子经验", "有耐心", "责任心强"],
    contact: "王先生 18575959773",
    tags: ["月嫂", "多子女", "育儿"],
    category: "baby",
  },

  // 母婴相关 - 吴川市
  {
    id: "2415",
    title: "育儿嫂",
    location: "吴川市",
    salary: "4800-5300",
    salaryRange: [4800, 5300],
    family: "双职工家庭，11个月宝宝",
    requirements: ["有经验", "会做辅食", "有爱心"],
    contact: "林女士 18675959432",
    tags: ["育儿", "辅食", "爱心"],
    category: "baby",
  },
  {
    id: "2416",
    title: "月嫂",
    location: "吴川市",
    salary: "6000-6500",
    salaryRange: [6000, 6500],
    family: "初产妇，需要专业护理",
    requirements: ["有经验", "持有证书", "会做月子餐"],
    contact: "陈女士 13414966039",
    tags: ["月嫂", "初产妇", "月子餐"],
    category: "baby",
  },

  // 母婴相关 - 廉江市
  {
    id: "2417",
    title: "育儿嫂",
    location: "廉江市",
    salary: "4500-5000",
    salaryRange: [4500, 5000],
    family: "三口之家，1岁宝宝",
    requirements: ["有经验", "会做辅食", "性格温和"],
    contact: "黄女士 18575959773",
    tags: ["育儿", "辅食", "温和"],
    category: "baby",
  },
  {
    id: "2418",
    title: "月嫂",
    location: "廉江市",
    salary: "5500-6000",
    salaryRange: [5500, 6000],
    family: "预产期下个月，提前预约",
    requirements: ["有经验", "持有证书", "会做月子餐"],
    contact: "李先生 18675959432",
    tags: ["月嫂", "月子餐", "预约"],
    category: "baby",
  },

  // 老人陪护 - 遂溪县
  {
    id: "2419",
    title: "老人陪护",
    location: "遂溪县",
    salary: "4500-5000",
    salaryRange: [4500, 5000],
    family: "70岁老人，行动不便",
    requirements: ["有护理经验", "有耐心", "会做饭"],
    contact: "张先生 13414966039",
    tags: ["老人", "护理", "做饭"],
    category: "elderly",
  },
  {
    id: "2420",
    title: "老人医护",
    location: "遂溪县",
    salary: "5000-5500",
    salaryRange: [5000, 5500],
    family: "80岁老人，有基础病",
    requirements: ["有医护知识", "会测血压血糖", "责任心强"],
    contact: "王女士 18575959773",
    tags: ["老人", "医护", "责任心"],
    category: "elderly",
  },

  // 老人陪护 - 赤坎区
  {
    id: "2335",
    title: "老人陪护",
    location: "赤坎区",
    salary: "4800-5200",
    salaryRange: [4800, 5200],
    family: "75岁老人，行动不便",
    requirements: ["有护理经验，能做简单家务", "有耐心，会做营养餐", "需住家，每月休息4天"],
    contact: "李老师 18675959432",
    tags: ["住家", "老人", "护理"],
    category: "elderly",
  },
  {
    id: "2421",
    title: "老人康复护理",
    location: "赤坎区",
    salary: "5500-6000",
    salaryRange: [5500, 6000],
    family: "65岁老人，中风恢复期",
    requirements: ["有康复护理经验", "会按摩推拿", "有医护背景优先"],
    contact: "陈先生 13414966039",
    tags: ["康复", "老人", "按摩"],
    category: "elderly",
  },

  // 老人陪护 - 霞山区
  {
    id: "2422",
    title: "老人陪护",
    location: "霞山区",
    salary: "4500-5000",
    salaryRange: [4500, 5000],
    family: "78岁老人，需要日常照料",
    requirements: ["有耐心", "会做家务", "性格温和"],
    contact: "林女士 18575959773",
    tags: ["老人", "照料", "家务"],
    category: "elderly",
  },
  {
    id: "2423",
    title: "老人医护",
    location: "霞山区",
    salary: "5500-6000",
    salaryRange: [5500, 6000],
    family: "82岁老人，有慢性病",
    requirements: ["有医护知识", "会用医疗器械", "责任心强"],
    contact: "黄先生 18675959432",
    tags: ["老人", "医护", "慢性病"],
    category: "elderly",
  },

  // 老人陪护 - 麻章区
  {
    id: "2424",
    title: "老人陪护",
    location: "麻章区",
    salary: "4600-5100",
    salaryRange: [4600, 5100],
    family: "72岁老人，需要陪伴",
    requirements: ["有耐心", "会聊天", "性格开朗"],
    contact: "刘女士 13414966039",
    tags: ["老人", "陪伴", "聊天"],
    category: "elderly",
  },
  {
    id: "2425",
    title: "老人护理",
    location: "麻章区",
    salary: "5200-5700",
    salaryRange: [5200, 5700],
    family: "85岁老人，卧床不起",
    requirements: ["有护理经验", "会翻身擦浴", "有责任心"],
    contact: "张先生 18575959773",
    tags: ["老人", "护理", "卧床"],
    category: "elderly",
  },

  // 老人陪护 - 开发区
  {
    id: "2426",
    title: "老人陪护",
    location: "开发区",
    salary: "4800-5300",
    salaryRange: [4800, 5300],
    family: "68岁老人，腿脚不便",
    requirements: ["有耐心", "会做饭", "性格温和"],
    contact: "王女士 18675959432",
    tags: ["老人", "陪护", "做饭"],
    category: "elderly",
  },
  {
    id: "2427",
    title: "老人医护",
    location: "开发区",
    salary: "5500-6000",
    salaryRange: [5500, 6000],
    family: "76岁老人，有高血压",
    requirements: ["有医护知识", "会测血压", "责任心强"],
    contact: "李先生 13414966039",
    tags: ["老人", "医护", "高血压"],
    category: "elderly",
  },

  // 老人陪护 - 坡头区
  {
    id: "2428",
    title: "老人陪护",
    location: "坡头区",
    salary: "4500-5000",
    salaryRange: [4500, 5000],
    family: "70岁老人，需要陪伴",
    requirements: ["有耐心", "会聊天", "性格开朗"],
    contact: "陈女士 18575959773",
    tags: ["老人", "陪伴", "聊天"],
    category: "elderly",
  },
  {
    id: "2429",
    title: "老人护理",
    location: "坡头区",
    salary: "5000-5500",
    salaryRange: [5000, 5500],
    family: "80岁老人，行动不便",
    requirements: ["有护理经验", "会做饭", "有责任心"],
    contact: "林先生 18675959432",
    tags: ["老人", "护理", "做饭"],
    category: "elderly",
  },

  // 老人陪护 - 雷州市
  {
    id: "2430",
    title: "老人陪护",
    location: "雷州市",
    salary: "4300-4800",
    salaryRange: [4300, 4800],
    family: "75岁老人，需要陪伴",
    requirements: ["有耐心", "会聊天", "性格温和"],
    contact: "黄女士 13414966039",
    tags: ["老人", "陪伴", "聊天"],
    category: "elderly",
  },
  {
    id: "2431",
    title: "老人护理",
    location: "雷州市",
    salary: "4800-5300",
    salaryRange: [4800, 5300],
    family: "82岁老人，有糖尿病",
    requirements: ["有护理经验", "会测血糖", "责任心强"],
    contact: "刘先生 18575959773",
    tags: ["老人", "护理", "糖尿病"],
    category: "elderly",
  },

  // 老人陪护 - 徐闻县
  {
    id: "2432",
    title: "老人陪护",
    location: "徐闻县",
    salary: "4200-4700",
    salaryRange: [4200, 4700],
    family: "70岁老人，需要陪伴",
    requirements: ["有耐心", "会聊天", "性格开朗"],
    contact: "张女士 18675959432",
    tags: ["老人", "陪伴", "聊天"],
    category: "elderly",
  },
  {
    id: "2433",
    title: "老人护理",
    location: "徐闻县",
    salary: "4700-5200",
    salaryRange: [4700, 5200],
    family: "78岁老人，行动不便",
    requirements: ["有护理经验", "会做饭", "有责任心"],
    contact: "王先生 13414966039",
    tags: ["老人", "护理", "做饭"],
    category: "elderly",
  },

  // 老人陪护 - 吴川市
  {
    id: "2434",
    title: "老人陪护",
    location: "吴川市",
    salary: "4300-4800",
    salaryRange: [4300, 4800],
    family: "72岁老人，需要陪伴",
    requirements: ["有耐心", "会聊天", "性格温和"],
    contact: "林女士 18575959773",
    tags: ["老人", "陪伴", "聊天"],
    category: "elderly",
  },
  {
    id: "2435",
    title: "老人护理",
    location: "吴川市",
    salary: "4800-5300",
    salaryRange: [4800, 5300],
    family: "80岁老人，有高血压",
    requirements: ["有护理经验", "会测血压", "责任心强"],
    contact: "陈先生 18675959432",
    tags: ["老人", "护理", "高血压"],
    category: "elderly",
  },

  // 老人陪护 - 廉江市
  {
    id: "2436",
    title: "老人陪护",
    location: "廉江市",
    salary: "4200-4700",
    salaryRange: [4200, 4700],
    family: "75岁老人，需要陪伴",
    requirements: ["有耐心", "会聊天", "性格开朗"],
    contact: "黄女士 13414966039",
    tags: ["老人", "陪伴", "聊天"],
    category: "elderly",
  },
  {
    id: "2437",
    title: "老人护理",
    location: "廉江市",
    salary: "4700-5200",
    salaryRange: [4700, 5200],
    family: "82岁老人，行动不便",
    requirements: ["有护理经验", "会做饭", "有责任心"],
    contact: "刘先生 18575959773",
    tags: ["老人", "护理", "做饭"],
    category: "elderly",
  },

  // 住家服务 - 遂溪县
  {
    id: "2438",
    title: "全职住家保姆",
    location: "遂溪县",
    salary: "4500-5000",
    salaryRange: [4500, 5000],
    family: "三口之家，需要全职保姆",
    requirements: ["有经验", "会做饭", "勤快整洁"],
    contact: "张女士 18675959432",
    tags: ["住家", "保姆", "做饭"],
    category: "home",
  },
  {
    id: "2439",
    title: "家庭厨师",
    location: "遂溪县",
    salary: "4000-4500",
    salaryRange: [4000, 4500],
    family: "四口之家，需要专业厨师",
    requirements: ["会做粤菜", "注重卫生", "有厨师证优先"],
    contact: "王先生 13414966039",
    tags: ["厨师", "粤菜", "卫生"],
    category: "home",
  },

  // 住家服务 - 赤坎区
  {
    id: "2440",
    title: "全职住家保姆",
    location: "赤坎区",
    salary: "5000-5500",
    salaryRange: [5000, 5500],
    family: "四口之家，需要全职保姆",
    requirements: ["有经验", "会做饭", "勤快整洁"],
    contact: "林女士 18575959773",
    tags: ["住家", "保姆", "做饭"],
    category: "home",
  },
  {
    id: "2441",
    title: "家庭厨师",
    location: "赤坎区",
    salary: "5500-6000",
    salaryRange: [5500, 6000],
    family: "五口之家，需要专业厨师",
    requirements: ["会做粤菜", "注重卫生", "有厨师证优先"],
    contact: "陈先生 18675959432",
    tags: ["厨师", "粤菜", "卫生"],
    category: "home",
  },

  // 住家服务 - 霞山区
  {
    id: "2336",
    title: "家庭保姆",
    location: "霞山区",
    salary: "4500-5000",
    salaryRange: [4500, 5000],
    family: "四口之家，需要全职保姆",
    requirements: ["有家政经验，擅长烹饪", "负责日常家务和三餐准备", "照顾10岁孩子放学后生活"],
    contact: "张女士 13414966039",
    tags: ["全职", "烹饪", "家务"],
    category: "home",
  },
  {
    id: "2442",
    title: "家庭厨师",
    location: "霞山区",
    salary: "5000-5500",
    salaryRange: [5000, 5500],
    family: "三口之家，需要专业厨师",
    requirements: ["会做粤菜", "注重卫生", "有厨师证优先"],
    contact: "黄先生 18575959773",
    tags: ["厨师", "粤菜", "卫生"],
    category: "home",
  },

  // 住家服务 - 麻章区
  {
    id: "2443",
    title: "全职住家保姆",
    location: "麻章区",
    salary: "4800-5300",
    salaryRange: [4800, 5300],
    family: "三口之家，需要全职保姆",
    requirements: ["有经验", "会做饭", "勤快整洁"],
    contact: "刘女士 18675959432",
    tags: ["住家", "保姆", "做饭"],
    category: "home",
  },
  {
    id: "2444",
    title: "家庭厨师",
    location: "麻章区",
    salary: "5200-5700",
    salaryRange: [5200, 5700],
    family: "四口之家，需要专业厨师",
    requirements: ["会做粤菜", "注重卫生", "有厨师证优先"],
    contact: "张先生 13414966039",
    tags: ["厨师", "粤菜", "卫生"],
    category: "home",
  },

  // 住家服务 - 开发区
  {
    id: "2445",
    title: "全职住家保姆",
    location: "开发区",
    salary: "5000-5500",
    salaryRange: [5000, 5500],
    family: "三口之家，需要全职保姆",
    requirements: ["有经验", "会做饭", "勤快整洁"],
    contact: "王女士 18575959773",
    tags: ["住家", "保姆", "做饭"],
    category: "home",
  },
  {
    id: "2446",
    title: "家庭厨师",
    location: "开发区",
    salary: "5500-6000",
    salaryRange: [5500, 6000],
    family: "五口之家，需要专业厨师",
    requirements: ["会做粤菜", "注重卫生", "有厨师证优先"],
    contact: "李先生 18675959432",
    tags: ["厨师", "粤菜", "卫生"],
    category: "home",
  },

  // 住家服务 - 坡头区
  {
    id: "2447",
    title: "全职住家保姆",
    location: "坡头区",
    salary: "4800-5300",
    salaryRange: [4800, 5300],
    family: "四口之家，需要全职保姆",
    requirements: ["有经验", "会做饭", "勤快整洁"],
    contact: "陈女士 13414966039",
    tags: ["住家", "保姆", "做饭"],
    category: "home",
  },
  {
    id: "2448",
    title: "家庭厨师",
    location: "坡头区",
    salary: "5000-5500",
    salaryRange: [5000, 5500],
    family: "三口之家，需要专业厨师",
    requirements: ["会做粤菜", "注重卫生", "有厨师证优先"],
    contact: "林先生 18575959773",
    tags: ["厨师", "粤菜", "卫生"],
    category: "home",
  },

  // 住家服务 - 雷州市
  {
    id: "2449",
    title: "全职住家保姆",
    location: "雷州市",
    salary: "4300-4800",
    salaryRange: [4300, 4800],
    family: "三口之家，需要全职保姆",
    requirements: ["有经验", "会做饭", "勤快整洁"],
    contact: "黄女士 18675959432",
    tags: ["住家", "保姆", "做饭"],
    category: "home",
  },
  {
    id: "2450",
    title: "家庭厨师",
    location: "雷州市",
    salary: "4500-5000",
    salaryRange: [4500, 5000],
    family: "四口之家，需要专业厨师",
    requirements: ["会做粤菜", "注重卫生", "有厨师证优先"],
    contact: "刘先生 13414966039",
    tags: ["厨师", "粤菜", "卫生"],
    category: "home",
  },

  // 住家服务 - 徐闻县
  {
    id: "2451",
    title: "全职住家保姆",
    location: "徐闻县",
    salary: "4200-4700",
    salaryRange: [4200, 4700],
    family: "三口之家，需要全职保姆",
    requirements: ["有经验", "会做饭", "勤快整洁"],
    contact: "张女士 18575959773",
    tags: ["住家", "保姆", "做饭"],
    category: "home",
  },
  {
    id: "2452",
    title: "家庭厨师",
    location: "徐闻县",
    salary: "4500-5000",
    salaryRange: [4500, 5000],
    family: "四口之家，需要专业厨师",
    requirements: ["会做粤菜", "注重卫生", "有厨师证优先"],
    contact: "王先生 18675959432",
    tags: ["厨师", "粤菜", "卫生"],
    category: "home",
  },

  // 住家服务 - 吴川市
  {
    id: "2453",
    title: "全职住家保姆",
    location: "吴川市",
    salary: "4300-4800",
    salaryRange: [4300, 4800],
    family: "三口之家，需要全职保姆",
    requirements: ["有经验", "会做饭", "勤快整洁"],
    contact: "林女士 13414966039",
    tags: ["住家", "保姆", "做饭"],
    category: "home",
  },
  {
    id: "2454",
    title: "家庭厨师",
    location: "吴川市",
    salary: "4500-5000",
    salaryRange: [4500, 5000],
    family: "四口之家，需要专业厨师",
    requirements: ["会做粤菜", "注重卫生", "有厨师证优先"],
    contact: "陈先生 18575959773",
    tags: ["厨师", "粤菜", "卫生"],
    category: "home",
  },

  // 住家服务 - 廉江市
  {
    id: "2455",
    title: "全职住家保姆",
    location: "廉江市",
    salary: "4200-4700",
    salaryRange: [4200, 4700],
    family: "三口之家，需要全职保姆",
    requirements: ["有经验", "会做饭", "勤快整洁"],
    contact: "黄女士 18675959432",
    tags: ["住家", "保姆", "做饭"],
    category: "home",
  },
  {
    id: "2456",
    title: "家庭厨师",
    location: "廉江市",
    salary: "4500-5000",
    salaryRange: [4500, 5000],
    family: "四口之家，需要专业厨师",
    requirements: ["会做粤菜", "注重卫生", "有厨师证优先"],
    contact: "刘先生 13414966039",
    tags: ["厨师", "粤菜", "卫生"],
    category: "home",
  },

  // 保洁服务 - 遂溪县
  {
    id: "2457",
    title: "家庭深度保洁",
    location: "遂溪县",
    salary: "300-500/次",
    salaryRange: [300, 500],
    family: "三居室，需要深度保洁",
    requirements: ["有经验", "熟悉各类清洁剂使用", "做事认真"],
    contact: "张女士 18575959773",
    tags: ["深度保洁", "家庭", "认真"],
    category: "cleaning",
  },
  {
    id: "2458",
    title: "专项清洁",
    location: "遂溪县",
    salary: "200-300/项",
    salaryRange: [200, 300],
    family: "需要油烟机和空调清洗",
    requirements: ["有经验", "熟悉家电清洗", "做事认真"],
    contact: "王先生 18675959432",
    tags: ["专项清洁", "家电", "认真"],
    category: "cleaning",
  },

  // 保洁服务 - 赤坎区
  {
    id: "2459",
    title: "家庭深度保洁",
    location: "赤坎区",
    salary: "400-600/次",
    salaryRange: [400, 600],
    family: "四居室，需要深度保洁",
    requirements: ["有经验", "熟悉各类清洁剂使用", "做事认真"],
    contact: "林女士 13414966039",
    tags: ["深度保洁", "家庭", "认真"],
    category: "cleaning",
  },
  {
    id: "2460",
    title: "专项清洁",
    location: "赤坎区",
    salary: "250-350/项",
    salaryRange: [250, 350],
    family: "需要窗户和地毯清洗",
    requirements: ["有经验", "熟悉各类清洁", "做事认真"],
    contact: "陈先生 18575959773",
    tags: ["专项清洁", "窗户", "地毯"],
    category: "cleaning",
  },

  // 保洁服务 - 霞山区
  {
    id: "2334",
    title: "钟点工",
    location: "霞山区",
    salary: "3000-3500",
    salaryRange: [3000, 3500],
    family: "三口之家，双职工",
    requirements: ["有保洁经验，做饭", "每周工作5天，每天4小时", "主要负责日常保洁和晚餐准备"],
    contact: "王先生 18675959432",
    tags: ["钟点工", "做饭", "保洁"],
    category: "cleaning",
  },
  {
    id: "2461",
    title: "家庭深度保洁",
    location: "霞山区",
    salary: "400-600/次",
    salaryRange: [400, 600],
    family: "三居室，需要深度保洁",
    requirements: ["有经验", "熟悉各类清洁剂使用", "做事认真"],
    contact: "黄女士 13414966039",
    tags: ["深度保洁", "家庭", "认真"],
    category: "cleaning",
  },

  // 保洁服务 - 麻章区
  {
    id: "2462",
    title: "家庭深度保洁",
    location: "麻章区",
    salary: "350-550/次",
    salaryRange: [350, 550],
    family: "三居室，需要深度保洁",
    requirements: ["有经验", "熟悉各类清洁剂使用", "做事认真"],
    contact: "刘女士 18675959432",
    tags: ["深度保洁", "家庭", "认真"],
    category: "cleaning",
  },
  {
    id: "2463",
    title: "专项清洁",
    location: "麻章区",
    salary: "200-300/项",
    salaryRange: [200, 300],
    family: "需要沙发和窗帘清洗",
    requirements: ["有经验", "熟悉布艺清洗", "做事认真"],
    contact: "张先生 18575959773",
    tags: ["专项清洁", "布艺", "认真"],
    category: "cleaning",
  },

  // 保洁服务 - 开发区
  {
    id: "2464",
    title: "家庭深度保洁",
    location: "开发区",
    salary: "400-600/次",
    salaryRange: [400, 600],
    family: "四居室，需要深度保洁",
    requirements: ["有经验", "熟悉各类清洁剂使用", "做事认真"],
    contact: "王女士 13414966039",
    tags: ["深度保洁", "家庭", "认真"],
    category: "cleaning",
  },
  {
    id: "2465",
    title: "专项清洁",
    location: "开发区",
    salary: "250-350/项",
    salaryRange: [250, 350],
    family: "需要油烟机和冰箱清洗",
    requirements: ["有经验", "熟悉家电清洗", "做事认真"],
    contact: "李先生 18675959432",
    tags: ["专项清洁", "家电", "认真"],
    category: "cleaning",
  },

  // 保洁服务 - 坡头区
  {
    id: "2338",
    title: "深度保洁",
    location: "坡头区",
    salary: "单次400-600",
    salaryRange: [400, 600],
    family: "新房入住前深度保洁",
    requirements: ["有新房保洁经验", "熟悉各类清洁剂使用", "能处理顽固污渍和除甲醛"],
    contact: "黄先生 18675959432",
    tags: ["深度保洁", "新房", "除甲醛"],
    category: "cleaning",
  },
  {
    id: "2466",
    title: "专项清洁",
    location: "坡头区",
    salary: "200-300/项",
    salaryRange: [200, 300],
    family: "需要地板打蜡和瓷砖美缝",
    requirements: ["有经验", "熟悉地面处理", "做事认真"],
    contact: "陈先生 18575959773",
    tags: ["专项清洁", "地板", "美缝"],
    category: "cleaning",
  },

  // 保洁服务 - 雷州市
  {
    id: "2467",
    title: "家庭深度保洁",
    location: "雷州市",
    salary: "300-500/次",
    salaryRange: [300, 500],
    family: "三居室，需要深度保洁",
    requirements: ["有经验", "熟悉各类清洁剂使用", "做事认真"],
    contact: "黄女士 13414966039",
    tags: ["深度保洁", "家庭", "认真"],
    category: "cleaning",
  },
  {
    id: "2468",
    title: "专项清洁",
    location: "雷州市",
    salary: "180-280/项",
    salaryRange: [180, 280],
    family: "需要油烟机和空调清洗",
    requirements: ["有经验", "熟悉家电清洗", "做事认真"],
    contact: "刘先生 18675959432",
    tags: ["专项清洁", "家电", "认真"],
    category: "cleaning",
  },

  // 保洁服务 - 徐闻县
  {
    id: "2469",
    title: "家庭深度保洁",
    location: "徐闻县",
    salary: "280-480/次",
    salaryRange: [280, 480],
    family: "三居室，需要深度保洁",
    requirements: ["有经验", "熟悉各类清洁剂使用", "做事认真"],
    contact: "张女士 18575959773",
    tags: ["深度保洁", "家庭", "认真"],
    category: "cleaning",
  },
  {
    id: "2470",
    title: "专项清洁",
    location: "徐闻县",
    salary: "150-250/项",
    salaryRange: [150, 250],
    family: "需要窗户和地毯清洗",
    requirements: ["有经验", "熟悉各类清洁", "做事认真"],
    contact: "王先生 13414966039",
    tags: ["专项清洁", "窗户", "地毯"],
    category: "cleaning",
  },

  // 保洁服务 - 吴川市
  {
    id: "2471",
    title: "家庭深度保洁",
    location: "吴川市",
    salary: "300-500/次",
    salaryRange: [300, 500],
    family: "三居室，需要深度保洁",
    requirements: ["有经验", "熟悉各类清洁剂使用", "做事认真"],
    contact: "林女士 18675959432",
    tags: ["深度保洁", "家庭", "认真"],
    category: "cleaning",
  },
  {
    id: "2472",
    title: "专项清洁",
    location: "吴川市",
    salary: "180-280/项",
    salaryRange: [180, 280],
    family: "需要沙发和窗帘清洗",
    requirements: ["有经验", "熟悉布艺清洗", "做事认真"],
    contact: "陈先生 18575959773",
    tags: ["专项清洁", "布艺", "认真"],
    category: "cleaning",
  },

  // 保洁服务 - 廉江市
  {
    id: "2473",
    title: "家庭深度保洁",
    location: "廉江市",
    salary: "280-480/次",
    salaryRange: [280, 480],
    family: "三居室，需要深度保洁",
    requirements: ["有经验", "熟悉各类清洁剂使用", "做事认真"],
    contact: "黄女士 13414966039",
    tags: ["深度保洁", "家庭", "认真"],
    category: "cleaning",
  },
  {
    id: "2474",
    title: "专项清洁",
    location: "廉江市",
    salary: "150-250/项",
    salaryRange: [150, 250],
    family: "需要油烟机和冰箱清洗",
    requirements: ["有经验", "熟悉家电清洗", "做事认真"],
    contact: "刘先生 18675959432",
    tags: ["专项清洁", "家电", "认真"],
    category: "cleaning",
  },
]

// 所有可用标签
const allTags = [
  "住家",
  "带睡",
  "育儿",
  "钟点工",
  "做饭",
  "保洁",
  "老人",
  "护理",
  "全职",
  "烹饪",
  "家务",
  "月嫂",
  "新生儿",
  "专业",
  "深度保洁",
  "新房",
  "除甲醛",
  "双胞胎",
  "辅食",
  "产妇",
  "月子",
  "早教",
  "婴儿",
  "幼儿",
  "陪护",
  "高级",
  "推拿",
  "24小时",
  "游泳",
  "抚触",
  "临时",
  "灵活",
  "单亲家庭",
  "儿童餐",
  "多子女",
  "爱心",
  "初产妇",
  "温和",
  "医护",
  "责任心",
  "康复",
  "按摩",
  "照料",
  "慢性病",
  "陪伴",
  "聊天",
  "卧床",
  "高血压",
  "糖尿病",
  "厨师",
  "粤菜",
  "卫生",
  "勤快",
  "整洁",
  "专项清洁",
  "家电",
  "窗户",
  "地毯",
  "布艺",
  "地板",
  "美缝",
]

export default function JobsPage() {
  const [searchTerm, setSearchTerm] = useState("")
  const [selectedLocation, setSelectedLocation] = useState("all")
  const [salaryRange, setSalaryRange] = useState([3000, 8000])
  const [selectedTags, setSelectedTags] = useState([])

  // 筛选职位
  const filteredJobs = jobsData.filter((job) => {
    // 搜索词筛选
    const searchMatch =
      job.id.includes(searchTerm) ||
      job.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      job.family.toLowerCase().includes(searchTerm.toLowerCase())

    // 地区筛选
    const locationMatch = selectedLocation === "all" || job.location === selectedLocation

    // 薪资范围筛选
    const minSalary = Number.parseInt(job.salaryRange[0])
    const maxSalary = Number.parseInt(job.salaryRange[1])
    const salaryMatch = minSalary >= salaryRange[0] && maxSalary <= salaryRange[1]

    // 标签筛选
    const tagMatch = selectedTags.length === 0 || selectedTags.some((tag) => job.tags.includes(tag))

    return searchMatch && locationMatch && salaryMatch && tagMatch
  })

  // 切换标签选择
  const toggleTag = (tag) => {
    if (selectedTags.includes(tag)) {
      setSelectedTags(selectedTags.filter((t) => t !== tag))
    } else {
      setSelectedTags([...selectedTags, tag])
    }
  }

  // 获取所有地区
  const locations = ["all", ...new Set(jobsData.map((job) => job.location))]

  return (
    <div className="min-h-screen py-16 px-4 md:px-6 lg:px-8 max-w-7xl mx-auto">
      <div className="text-center mb-16">
        <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-[#FF7F50] to-[#4A90E2] bg-clip-text text-transparent">
          招工信息
        </h1>
        <p className="mt-4 text-xl text-gray-700 max-w-2xl mx-auto">寻找适合您的工作机会，或发布您的招聘需求</p>
      </div>

      {/* 搜索和筛选区 */}
      <div className="mb-10 bg-[#F5F5F5]/80 backdrop-blur-sm rounded-3xl p-6">
        <div className="flex flex-col md:flex-row gap-4 mb-6">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
            <Input
              placeholder="搜索职位编号或关键词..."
              className="pl-10"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
          <div className="flex gap-4">
            <div className="relative min-w-[150px]">
              <MapPin className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
              <select
                className="w-full h-10 pl-10 pr-4 rounded-md border border-input bg-background"
                value={selectedLocation}
                onChange={(e) => setSelectedLocation(e.target.value)}
              >
                <option value="all">所有地区</option>
                {locations
                  .filter((loc) => loc !== "all")
                  .map((location) => (
                    <option key={location} value={location}>
                      {location}
                    </option>
                  ))}
              </select>
            </div>
            <Button variant="outline" className="flex items-center gap-2">
              <Filter className="h-4 w-4" />
              筛选
            </Button>
          </div>
        </div>

        <div className="space-y-4">
          <div>
            <div className="flex items-center mb-2">
              <DollarSign className="h-4 w-4 mr-2 text-[#FF7F50]" />
              <span className="font-medium">
                薪资范围: {salaryRange[0]}-{salaryRange[1]}元
              </span>
            </div>
            <Slider
              defaultValue={[3000, 8000]}
              min={3000}
              max={8000}
              step={100}
              value={salaryRange}
              onValueChange={setSalaryRange}
              className="w-full"
            />
          </div>

          <div>
            <div className="flex items-center mb-2">
              <Filter className="h-4 w-4 mr-2 text-[#4A90E2]" />
              <span className="font-medium">标签筛选:</span>
            </div>
            <div className="flex flex-wrap gap-2">
              {allTags.map((tag) => (
                <Badge
                  key={tag}
                  variant={selectedTags.includes(tag) ? "default" : "outline"}
                  className={`cursor-pointer ${selectedTags.includes(tag) ? "bg-[#FF7F50] hover:bg-[#FF7F50]/90" : ""}`}
                  onClick={() => toggleTag(tag)}
                >
                  {tag}
                </Badge>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* 职位分类标签 */}
      <Tabs defaultValue="all" className="w-full mb-10">
        <TabsList className="grid grid-cols-2 md:grid-cols-5 w-full max-w-3xl mx-auto">
          <TabsTrigger value="all">全部岗位</TabsTrigger>
          <TabsTrigger value="baby">母婴相关</TabsTrigger>
          <TabsTrigger value="elderly">老人陪护</TabsTrigger>
          <TabsTrigger value="home">住家服务</TabsTrigger>
          <TabsTrigger value="cleaning">保洁服务</TabsTrigger>
        </TabsList>

        <TabsContent value="all" className="mt-6">
          <JobsList jobs={filteredJobs} />
        </TabsContent>

        <TabsContent value="baby" className="mt-6">
          <JobsList jobs={filteredJobs.filter((job) => job.category === "baby")} />
        </TabsContent>

        <TabsContent value="elderly" className="mt-6">
          <JobsList jobs={filteredJobs.filter((job) => job.category === "elderly")} />
        </TabsContent>

        <TabsContent value="home" className="mt-6">
          <JobsList jobs={filteredJobs.filter((job) => job.category === "home")} />
        </TabsContent>

        <TabsContent value="cleaning" className="mt-6">
          <JobsList jobs={filteredJobs.filter((job) => job.category === "cleaning")} />
        </TabsContent>
      </Tabs>
    </div>
  )
}

function JobsList({ jobs }) {
  if (jobs.length === 0) {
    return (
      <div className="text-center py-10">
        <p className="text-gray-500">没有找到符合条件的职位</p>
      </div>
    )
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      {jobs.map((job) => (
        <JobCard key={job.id} job={job} />
      ))}
    </div>
  )
}

function JobCard({ job }) {
  const getCategoryIcon = (category) => {
    switch (category) {
      case "baby":
        return <Baby className="h-5 w-5 text-[#FF7F50]" />
      case "elderly":
        return <Heart className="h-5 w-5 text-[#4A90E2]" />
      case "home":
        return <Home className="h-5 w-5 text-[#FF7F50]" />
      case "cleaning":
        return <Sparkles className="h-5 w-5 text-[#4A90E2]" />
      default:
        return <Users className="h-5 w-5 text-[#FF7F50]" />
    }
  }

  return (
    <Card className="backdrop-blur-sm bg-white/70 border-none shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
      <CardHeader>
        <div className="flex justify-between items-start">
          <div className="flex items-center">
            <div className="mr-3 bg-gradient-to-br from-[#FF7F50]/10 to-[#4A90E2]/10 p-2 rounded-lg">
              {getCategoryIcon(job.category)}
            </div>
            <div>
              <CardTitle className="flex items-center">{job.title}</CardTitle>
              <div className="flex items-center mt-1 text-sm text-gray-500">
                <MapPin className="h-3 w-3 mr-1" />
                {job.location}
                <span className="mx-2">|</span>
                <span>编号: #{job.id}</span>
              </div>
            </div>
          </div>
          <Badge className="bg-gradient-to-r from-[#4A90E2] to-[#FF7F50]">{job.salary}元</Badge>
        </div>
      </CardHeader>
      <CardContent>
        <div className="space-y-3">
          <p className="flex items-center text-sm">
            <Users className="h-4 w-4 mr-2 text-[#4A90E2]" />
            <span className="font-medium">家庭情况:</span> {job.family}
          </p>
          <div>
            <p className="flex items-center text-sm mb-1">
              <Clock className="h-4 w-4 mr-2 text-[#FF7F50]" />
              <span className="font-medium">工作要求:</span>
            </p>
            <ul className="list-disc pl-10 space-y-1 text-sm">
              {job.requirements.map((req, index) => (
                <li key={index}>{req}</li>
              ))}
            </ul>
          </div>
          <div className="flex flex-wrap gap-2 mt-3">
            {job.tags.map((tag) => (
              <Badge key={tag} variant="outline" className="bg-[#F5F5F5]">
                {tag}
              </Badge>
            ))}
          </div>
        </div>
      </CardContent>
      <CardFooter className="flex justify-between">
        <p className="text-sm text-muted-foreground">联系: {job.contact}</p>
        <Button size="sm">申请岗位</Button>
      </CardFooter>
    </Card>
  )
}
