(window.webpackJsonp=window.webpackJsonp||[]).push([[160],{645:function(t,a,r){"use strict";r.r(a);var e=r(45),s=Object(e.a)({},(function(){var t=this,a=t.$createElement,r=t._self._c||a;return r("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[r("h1",{attrs:{id:"词汇表"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#词汇表"}},[t._v("#")]),t._v(" 词汇表")]),t._v(" "),r("p",[t._v("改编自 "),r("a",{attrs:{href:"https://statecharts.dev/glossary/",target:"_blank",rel:"noopener noreferrer"}},[t._v("状态图世界 (Glossary)"),r("OutboundLink")],1),t._v("。")]),t._v(" "),r("h2",{attrs:{id:"动作-action"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#动作-action"}},[t._v("#")]),t._v(" 动作（Action）")]),t._v(" "),r("p",[t._v("动作，是作为对状态转换，而执行的 "),r("RouterLink",{attrs:{to:"/zh/guides/effects.html"}},[t._v("作用（Effect）")]),t._v("。")],1),t._v(" "),r("h2",{attrs:{id:"演员-actor"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#演员-actor"}},[t._v("#")]),t._v(" 演员（Actor）")]),t._v(" "),r("p",[t._v("演员是一个实体，它可以向其他演员发送消息、接收消息，并指定其响应消息的行为，其中可能包括产生其他新的演员。")]),t._v(" "),r("h2",{attrs:{id:"原子状态-atomic-state"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#原子状态-atomic-state"}},[t._v("#")]),t._v(" 原子状态（Atomic state）")]),t._v(" "),r("p",[t._v("原子状态是没有子状态的状态节点。")]),t._v(" "),r("h2",{attrs:{id:"复合状态-compound-state"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#复合状态-compound-state"}},[t._v("#")]),t._v(" 复合状态（Compound state）")]),t._v(" "),r("p",[t._v("一个复合状态有一个或多个子状态。这些子状态之一必须是初始状态，这是进入父级复合状态时，进入的默认状态节点。")]),t._v(" "),r("h2",{attrs:{id:"条件-condition"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#条件-condition"}},[t._v("#")]),t._v(" 条件（Condition）")]),t._v(" "),r("p",[t._v("参考 "),r("a",{attrs:{href:"#guard"}},[t._v("守卫（guard）")]),t._v("。")]),t._v(" "),r("h2",{attrs:{id:"进入动作-entry-action"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#进入动作-entry-action"}},[t._v("#")]),t._v(" 进入动作（Entry action）")]),t._v(" "),r("p",[t._v("进入动作是在进入其父级状态时执行的"),r("a",{attrs:{href:"#action"}},[t._v("动作（action）")]),t._v("。")]),t._v(" "),r("h2",{attrs:{id:"事件-event"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#事件-event"}},[t._v("#")]),t._v(" 事件（Event）")]),t._v(" "),r("p",[t._v("事件表示某事发生在特定时刻。事件是状态机接收的内容，并且是可能进行转换的原因。")]),t._v(" "),r("h2",{attrs:{id:"无事件转换-eventless-transition"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#无事件转换-eventless-transition"}},[t._v("#")]),t._v(" 无事件转换（Eventless transition）")]),t._v(" "),r("p",[t._v("无事件转换，是在其父级状态处于活动状态时自动进行的转换。")]),t._v(" "),r("h2",{attrs:{id:"退出动作-exit-action"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#退出动作-exit-action"}},[t._v("#")]),t._v(" 退出动作（Exit action）")]),t._v(" "),r("p",[t._v("退出动作是在退出其父级状态时执行的"),r("a",{attrs:{href:"#action"}},[t._v("动作（action）")]),t._v("。")]),t._v(" "),r("h2",{attrs:{id:"外部转换-external-transition"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#外部转换-external-transition"}},[t._v("#")]),t._v(" 外部转换（External transition）")]),t._v(" "),r("p",[t._v("在 SCXML 中，外部转换是，当目标状态是源状态的后代时，退出源状态的转换。有关详细信息，请参阅 "),r("a",{attrs:{href:"https://www.w3.org/TR/scxml/#SelectingTransitions",target:"_blank",rel:"noopener noreferrer"}},[t._v("选择转换 (SCXML)"),r("OutboundLink")],1),t._v("。")]),t._v(" "),r("h2",{attrs:{id:"最终状态-final-state"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#最终状态-final-state"}},[t._v("#")]),t._v(" 最终状态（Final state）")]),t._v(" "),r("p",[t._v("最终状态表示该状态已“完成”，并且不会再处理任何事件。")]),t._v(" "),r("h2",{attrs:{id:"守卫-guard"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#守卫-guard"}},[t._v("#")]),t._v(" 守卫（Guard）")]),t._v(" "),r("p",[t._v("守卫是一个布尔表达式，用于确定是启用（如果条件计算为 "),r("em",[t._v("true")]),t._v("）还是禁用（"),r("em",[t._v("false")]),t._v("）的转换。也称为 "),r("a",{attrs:{href:"#condition"}},[t._v("条件（condition）")]),t._v("。")]),t._v(" "),r("h2",{attrs:{id:"历史状态-history-state"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#历史状态-history-state"}},[t._v("#")]),t._v(" 历史状态（History state）")]),t._v(" "),r("p",[t._v("历史状态是一种伪状态，它会记住并转换到其父级状态的最近活动的子状态或默认目标状态。")]),t._v(" "),r("h2",{attrs:{id:"初始状态-initial-state"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#初始状态-initial-state"}},[t._v("#")]),t._v(" 初始状态（Initial state）")]),t._v(" "),r("p",[t._v("复合状态的初始状态，是进入复合状态时，进入的默认子状态。")]),t._v(" "),r("h2",{attrs:{id:"内部事件-internal-event"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#内部事件-internal-event"}},[t._v("#")]),t._v(" 内部事件（Internal event）")]),t._v(" "),r("p",[t._v("内部事件是由状态机本身引发的事件。内部事件在前一个事件之后立即处理。")]),t._v(" "),r("h2",{attrs:{id:"内部转换-internal-transition"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#内部转换-internal-transition"}},[t._v("#")]),t._v(" 内部转换（Internal transition）")]),t._v(" "),r("p",[t._v("在 SCXML 中，内部转换是在不退出源状态的情况下转换到后代目标状态的转换。这是默认的转换行为。有关详细信息，请参阅"),r("a",{attrs:{href:"https://www.w3.org/TR/scxml/#SelectingTransitions",target:"_blank",rel:"noopener noreferrer"}},[t._v("选择转换 (SCXML)"),r("OutboundLink")],1),t._v("。")]),t._v(" "),r("h2",{attrs:{id:"计算的数学模型"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#计算的数学模型"}},[t._v("#")]),t._v(" 计算的数学模型")]),t._v(" "),r("p",[t._v("计算的数学模型，是一种基于数学函数描述事物如何计算（给定输入，输出是什么？）的方式。对于状态机和状态图，相关函数是 "),r("em",[t._v("状态转换函数")]),t._v(" (参考 "),r("a",{attrs:{href:"https://en.wikipedia.org/wiki/Finite-state_machine#Mathematical_model",target:"_blank",rel:"noopener noreferrer"}},[t._v("有限状态机：状态模型 (Wikipedia)"),r("OutboundLink")],1),t._v(")。")]),t._v(" "),r("p",[t._v("有关更多，请参阅 "),r("a",{attrs:{href:"https://en.wikipedia.org/wiki/Model_of_computation",target:"_blank",rel:"noopener noreferrer"}},[t._v("计算模型 (Wikipedia)"),r("OutboundLink")],1),t._v(" 和 "),r("a",{attrs:{href:"https://en.wikipedia.org/wiki/Mathematical_model",target:"_blank",rel:"noopener noreferrer"}},[t._v("数学模型 (Wikipedia)"),r("OutboundLink")],1),t._v("。")]),t._v(" "),r("h2",{attrs:{id:"正交状态-orthogonal-state"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#正交状态-orthogonal-state"}},[t._v("#")]),t._v(" 正交状态（Orthogonal state）")]),t._v(" "),r("p",[t._v("参考 "),r("a",{attrs:{href:"#parallel-state"}},[t._v("并行状态（parallel state）")]),t._v("。")]),t._v(" "),r("h2",{attrs:{id:"并行状态-parallel-state"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#并行状态-parallel-state"}},[t._v("#")]),t._v(" 并行状态（Parallel state）")]),t._v(" "),r("p",[t._v("并行状态，是一种复合状态，其中所有子状态（称为 "),r("em",[t._v("区域")]),t._v(" ）同时处于活动状态。")]),t._v(" "),r("h2",{attrs:{id:"假状态-pseudostate"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#假状态-pseudostate"}},[t._v("#")]),t._v(" 假状态（Pseudostate）")]),t._v(" "),r("p",[t._v("一种瞬间的。例如，"),r("a",{attrs:{href:"#initial-state"}},[t._v("初始状态")]),t._v(" 或 "),r("a",{attrs:{href:"#history-state"}},[t._v("历史状态")]),t._v("。")]),t._v(" "),r("h2",{attrs:{id:"引发事件-raised-event"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#引发事件-raised-event"}},[t._v("#")]),t._v(" 引发事件（Raised event）")]),t._v(" "),r("p",[t._v("参考 "),r("a",{attrs:{href:"#internal-event"}},[t._v("内部事件")]),t._v(".")]),t._v(" "),r("h2",{attrs:{id:"服务-service"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#服务-service"}},[t._v("#")]),t._v(" 服务（Service）")]),t._v(" "),r("p",[t._v("服务是解释（interpreter）的 "),r("a",{attrs:{href:"#state-machine"}},[t._v("状态机")]),t._v("; 即，代表状态机的 [演员]](#actor)。")]),t._v(" "),r("h2",{attrs:{id:"状态机"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#状态机"}},[t._v("#")]),t._v(" 状态机")]),t._v(" "),r("p",[t._v("状态机，是系统行为的数学模型。它通过 "),r("a",{attrs:{href:"#state"}},[t._v("状态")]),t._v("、"),r("a",{attrs:{href:"#event"}},[t._v("事件")]),t._v(" 和 "),r("a",{attrs:{href:"#transition"}},[t._v("转换")]),t._v(" 来描述行为。")]),t._v(" "),r("h2",{attrs:{id:"状态"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#状态"}},[t._v("#")]),t._v(" 状态")]),t._v(" "),r("p",[t._v("状态，表示状态机的整体行为。在状态图中，状态是所有活动状态（可以是原子的、复合的、并行的或最终的）的集合。")]),t._v(" "),r("h2",{attrs:{id:"瞬间状态-transient-state"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#瞬间状态-transient-state"}},[t._v("#")]),t._v(" 瞬间状态（Transient state）")]),t._v(" "),r("p",[t._v("瞬间状态是只有 "),r("a",{attrs:{href:"#eventless-transition"}},[t._v("无事件转换")]),t._v(" 的状态。")]),t._v(" "),r("h2",{attrs:{id:"转换-transition"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#转换-transition"}},[t._v("#")]),t._v(" 转换（Transition）")]),t._v(" "),r("p",[t._v("转换，是对在转换的源状态中发生特定 "),r("a",{attrs:{href:"#event"}},[t._v("事件")]),t._v(" 时，状态机将立即处于哪些目标 "),r("a",{attrs:{href:"#state"}},[t._v("状态")]),t._v(" 和 "),r("a",{attrs:{href:"#action"}},[t._v("动作")]),t._v(" 的描述。")]),t._v(" "),r("h2",{attrs:{id:"可视化表达"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#可视化表达"}},[t._v("#")]),t._v(" 可视化表达")]),t._v(" "),r("p",[t._v("可视化表达，是一种精确的语言（如编程语言），主要使用视觉符号（状态、转换等），而不仅仅是代码或文本。状态图就是这种表达。")]),t._v(" "),r("blockquote",[r("p",[t._v("可视化表达是图解和直观的，在数学上是严格的语言。")]),t._v(" "),r("p",[t._v("– https://link.springer.com/referenceworkentry/10.1007%2F978-0-387-39940-9_444")])])])}),[],!1,null,null,null);a.default=s.exports}}]);