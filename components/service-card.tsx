import Link from "next/link"
import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"

export default function ServiceCard({ icon, title, features, href }) {
  return (
    <Card className="backdrop-blur-sm bg-white/70 border-none shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
      <CardContent className="pt-6">
        <div className="text-center mb-6">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-br from-[#FF7F50]/10 to-[#4A90E2]/10 mb-4">
            {icon}
          </div>
          <h3 className="text-xl font-bold">{title}</h3>
        </div>
        <ul className="space-y-2">
          {features.map((feature, index) => (
            <li key={index} className="flex items-center">
              <div className="h-1.5 w-1.5 rounded-full bg-[#FF7F50] mr-2"></div>
              {feature}
            </li>
          ))}
        </ul>
      </CardContent>
      <CardFooter>
        <Button variant="ghost" className="w-full group" asChild>
          <Link href={href}>
            了解更多
            <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
          </Link>
        </Button>
      </CardFooter>
    </Card>
  )
}
