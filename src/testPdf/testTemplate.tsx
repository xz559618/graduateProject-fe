import Image from "next/image";
import { Mail, Phone, MapPin, Globe } from "lucide-react";

export default function ResumeTemplate() {
  return (
    <div className="max-w-4xl mx-auto bg-white shadow-lg">
      {/* Header */}
      <div className="relative">
        <div className="flex items-center border-b border-gray-200">
          <div className="p-6 flex-1">
            <h1 className="text-3xl font-bold text-[#3c6e8f]">个人简历</h1>
            <p className="text-sm text-gray-500 mt-1">
              积极与勤奋，一个好的开始。
              <span className="ml-2 text-[#3c6e8f]">Personal resume</span>
            </p>
          </div>
          <div className="flex gap-2 p-4">
            <div className="w-8 h-8 rounded-full bg-[#e6c87c] flex items-center justify-center">
              <Mail className="w-4 h-4 text-white" />
            </div>
            <div className="w-8 h-8 rounded-full bg-[#e6c87c] flex items-center justify-center">
              <Phone className="w-4 h-4 text-white" />
            </div>
            <div className="w-8 h-8 rounded-full bg-[#e6c87c] flex items-center justify-center">
              <Globe className="w-4 h-4 text-white" />
            </div>
          </div>
        </div>
        <div className="absolute bottom-0 right-0 w-full h-2 bg-[#e6c87c]"></div>
      </div>

      {/* Basic Information */}
      <div className="p-6">
        <div className="bg-[#f5f5f5] border-l-4 border-[#3c6e8f] mb-6">
          <div className="flex items-center p-2 bg-[#3c6e8f] text-white">
            <h2 className="font-bold">基本信息</h2>
          </div>
          <div className="p-4 grid grid-cols-12 gap-4">
            <div className="col-span-9 grid grid-cols-2 gap-4">
              <div className="flex items-center">
                <span className="font-bold w-20">姓名：</span>
                <span>王小明</span>
              </div>
              <div className="flex items-center">
                <span className="font-bold w-20">出生年月：</span>
                <span>1996/05</span>
              </div>
              <div className="flex items-center">
                <span className="font-bold w-20">性别：</span>
                <span>男</span>
              </div>
              <div className="flex items-center">
                <span className="font-bold w-20">身高：</span>
                <span>167cm</span>
              </div>
              <div className="flex items-center">
                <span className="font-bold w-20">电话：</span>
                <span>13888888888</span>
              </div>
              <div className="flex items-center">
                <span className="font-bold w-20">政治面貌：</span>
                <span>中共党员</span>
              </div>
              <div className="flex items-center">
                <span className="font-bold w-20">邮箱：</span>
                <span>example@163.com</span>
              </div>
              <div className="flex items-center">
                <span className="font-bold w-20">毕业院校：</span>
                <span>某大学</span>
              </div>
              <div className="flex items-center col-span-2">
                <span className="font-bold w-20">住址：</span>
                <span>某市某区某街道</span>
              </div>
              <div className="flex items-center">
                <span className="font-bold w-20">求职意向：</span>
                <span>前端开发</span>
              </div>
            </div>
            <div className="col-span-3 flex justify-center">
              <div className="w-28 h-36 border border-gray-300 bg-gray-100 flex items-center justify-center">
                <Image
                  src="/placeholder.svg?height=140&width=112"
                  width={112}
                  height={140}
                  alt="个人照片"
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Education Background */}
        <div className="bg-[#f5f5f5] border-l-4 border-[#3c6e8f] mb-6">
          <div className="flex items-center p-2 bg-[#3c6e8f] text-white">
            <h2 className="font-bold">教育背景</h2>
          </div>
          <div className="p-4">
            <div className="flex border-b border-dashed border-gray-300 pb-4">
              <div className="w-36 font-bold">2005-07-2009-06</div>
              <div className="w-36">江苏科技大学</div>
              <div className="flex-1">市场营销（本科）</div>
            </div>
            <div className="pt-4">
              <p className="text-sm text-gray-700">
                主修课程：宏观经济学、管理经济学、管理学原理、统计学、会计学、会计学、经济管理、市场营销、经济法
              </p>
              <p className="text-sm text-gray-700 mt-2">
                在校表现：成绩优异，积极参与社团活动
              </p>
            </div>
          </div>
        </div>

        {/* Work Experience */}
        <div className="bg-[#f5f5f5] border-l-4 border-[#3c6e8f] mb-6">
          <div className="flex items-center p-2 bg-[#3c6e8f] text-white">
            <h2 className="font-bold">工作经历</h2>
          </div>
          <div className="p-4">
            <div className="mb-4">
              <div className="flex mb-2">
                <div className="w-36 font-bold">2017-04-至今</div>
                <div className="w-64">杭州市某网络科技有限公司</div>
                <div className="flex-1">市场经理（主管）</div>
              </div>
              <ul className="list-disc pl-8 space-y-2 text-sm">
                <li>
                  负责公司产品北京地区的市场推广，对 IT
                  行业有深入了解，公司产品在北京地区的销售额提高了
                  30%，知名度、品牌、美誉度都有了很大的提高。
                </li>
                <li>
                  负责广告活动的策划，通过对市场的调研，为客户制定适合的广告计划（包括媒体策略、创意策略、媒介策略等）。
                </li>
              </ul>
            </div>
            <div className="mb-4">
              <div className="flex mb-2">
                <div className="w-36 font-bold">2010-03-2017-03</div>
                <div className="w-64">杭州市某网络科技有限公司</div>
                <div className="flex-1">销售（主管）</div>
              </div>
              <ul className="list-disc pl-8 space-y-2 text-sm">
                <li>
                  负责公司产品的销售及推广，完成销售任务，维护客户关系，开发新客户，促成产品销售达成交易。
                </li>
                <li>
                  负责收集一线的客户反馈，对产品的改进提出建议，协助解决客户提出的问题，提高客户满意度。
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Project Experience */}
        <div className="bg-[#f5f5f5] border-l-4 border-[#3c6e8f] mb-6">
          <div className="flex items-center p-2 bg-[#3c6e8f] text-white">
            <h2 className="font-bold">项目经历</h2>
          </div>
          <div className="p-4">
            <div className="mb-4">
              <div className="flex mb-2">
                <div className="w-36 font-bold">2009-03-2011-06</div>
                <div className="w-64">杭州市某信息科技有限公司</div>
                <div className="flex-1">网络工程师</div>
              </div>
              <ul className="list-disc pl-8 space-y-2 text-sm">
                <li>
                  日常负责公司内部网络的维护，保证公司网络的正常运行，以及对公司
                  PC 机的日常维护。
                </li>
                <li>
                  负责公司下属7个机构的上下行网络的维护，中继站的日常维护，保障了下属机构的网络通畅，提高了工作效率。
                </li>
                <li>负责了下属机构的网络改造。</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Skills */}
        <div className="bg-[#f5f5f5] border-l-4 border-[#3c6e8f] mb-6">
          <div className="flex items-center p-2 bg-[#3c6e8f] text-white">
            <h2 className="font-bold">技能特长</h2>
          </div>
          <div className="p-4">
            <p className="mb-2">
              普通话一级甲等，英语四级（CET-4/6），良好的表达能力，能够在公众场合发言。
            </p>
            <p>熟练掌握办公软件的使用。</p>
          </div>
        </div>

        {/* Self-evaluation */}
        <div className="bg-[#f5f5f5] border-l-4 border-[#3c6e8f] mb-6">
          <div className="flex items-center p-2 bg-[#3c6e8f] text-white">
            <h2 className="font-bold">自我评价</h2>
          </div>
          <div className="p-4">
            <p>
              性格开朗活泼大方，为人诚恳，待人友好，具有良好的人际交往能力和团队协作精神。做事认真负责，能吃苦耐劳，勇于挑战新事物，具有较强的组织能力与团队精神，能迅速的适应各种环境。
            </p>
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="p-4 flex justify-end">
        <div className="w-10 h-10 rounded-full bg-[#e6c87c] flex items-center justify-center">
          <MapPin className="w-5 h-5 text-white" />
        </div>
      </div>
    </div>
  );
}
