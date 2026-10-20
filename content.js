// 演示内容：陈梅（Mei Chen）是虚构人物。所有公司、学校、活动、人名、证书和数字都是虚构的，
// 所有文件图片都带有"MUSTER / SAMPLE / 样本"水印。由 resume-portfolio-site 生成。

window.SITE = {
  meta: {
    languages: ["de", "en", "zh"],
    target: {
      role: { de: "Junior Supply Chain Analyst", en: "Junior supply chain analyst", zh: "初级供应链分析师" },
      type: "Vollzeit",
      city: "Stuttgart"
    },
    style: "editorial",
    layout: "editorial",
    updated: "2026-10-20"
  },

  basics: {
    name: "Mei Chen",
    label: {
      de: "Supply-Chain-Analystin · M.Sc. Logistik",
      en: "Supply chain analyst · M.Sc. Logistics",
      zh: "供应链数据分析 · 物流硕士"
    },
    headline: {
      de: "Ich mache Abläufe in der Logistik mit Daten planbar – mit Prognosen und Reports, die an zwei Standorten täglich genutzt werden.",
      en: "I make logistics operations plannable with data: forecasts and reports that two warehouses use every day.",
      zh: "我用数据让物流变得可计划：做出两个仓库每天都在用的预测和报表。"
    },
    image: "assets/img/avatar.svg",
    email: { value: "mei.chen.test@example.com" },
    location: { city: { de: "Stuttgart", en: "Stuttgart", zh: "斯图加特" }, countryCode: "DE" },
    availability: {
      type: { de: "Vollzeit (Junior)", en: "Full-time (junior)", zh: "全职（初级岗位）" },
      hours: { de: "ab sofort", en: "available now", zh: "随时可以入职" },
      note: { de: "Stuttgart, Ulm, München oder hybrid", en: "Stuttgart, Ulm, Munich or hybrid", zh: "斯图加特、乌尔姆、慕尼黑或混合办公" }
    },
    cv: { de: "assets/docs/cv-de.pdf", en: "assets/docs/cv-en.pdf" }
  },

  work: [
    {
      id: "beispiel-logistik",
      short: "Beispiel Logistik",
      name: "Beispiel Logistik GmbH",
      position: { de: "Werkstudentin Supply Chain Analytics", en: "Working Student, Supply Chain Analytics", zh: "供应链分析 Werkstudent" },
      type: { de: "Werkstudentin", en: "Working student", zh: "Werkstudent（在读学生工）" },
      location: { de: "Stuttgart", en: "Stuttgart", zh: "斯图加特" },
      startDate: "2024-03",
      endDate: "2026-08",
      summary: {
        de: "Datenanalyse für die Lagerstandorte Stuttgart und Ulm.",
        en: "Data analysis for the Stuttgart and Ulm warehouses.",
        zh: "为斯图加特和乌尔姆两个仓库做数据分析。"
      },
      highlights: [
        { de: "Prognose der Kommissioniermengen entwickelt, die heute die Schichtplanung an beiden Standorten unterstützt", en: "Built a picking-volume forecast that now supports shift planning at both sites", zh: "开发拣货量预测，现在两个仓库都用它排班" },
        { de: "Wöchentlichen Kennzahlen-Report in Power BI für die Standortleitungen aufgebaut", en: "Built a weekly Power BI KPI report for the site managers", zh: "用 Power BI 为站点负责人搭建每周指标报表" },
        { de: "Lagerplatzbelegung analysiert und Optimierungsvorschläge erarbeitet", en: "Analysed storage-location usage and proposed improvements", zh: "分析库位占用并提出优化建议" }
      ],
      skills: ["python", "sql", "powerbi", "forecasting"],
      stories: ["picking-forecast", "kpi-report"],
      evidence: ["doc-zeugnis", "doc-reco-manager"],
      sources: ["M01", "M02", "M03", "I05"]
    },
    {
      id: "hiwi",
      short: { de: "HiWi Logistik", en: "Research assistant", zh: "科研助理" },
      name: "Hochschule Beispielstadt",
      position: { de: "Wissenschaftliche Hilfskraft, Lehrstuhl für Logistik", en: "Research Assistant, Chair of Logistics", zh: "物流教席科研助理" },
      type: "HiWi",
      location: { de: "Beispielstadt", en: "Beispielstadt", zh: "示例市" },
      startDate: "2023-10",
      endDate: "2024-02",
      summary: {
        de: "Datenaufbereitung für ein Forschungsprojekt zur Lagersimulation.",
        en: "Data preparation for a research project on warehouse simulation.",
        zh: "为一个仓储仿真研究项目准备数据。"
      },
      highlights: [
        { de: "Bewegungsdaten aus drei Partnerlagern bereinigt und vereinheitlicht", en: "Cleaned and harmonised movement data from three partner warehouses", zh: "清洗并统一了三个合作仓库的出入库数据" }
      ],
      skills: ["python", "simulation"],
      sources: ["M01", "I09"]
    },
    {
      id: "muster-trading",
      short: "Muster Trading",
      name: "Muster Trading Co.",
      position: { de: "Praktikantin Einkauf", en: "Purchasing Intern", zh: "采购实习生" },
      type: "Praktikum",
      location: { de: "Chengdu", en: "Chengdu", zh: "成都" },
      startDate: "2022-09",
      endDate: "2023-02",
      summary: {
        de: "Lieferantenbewertung und Preisvergleiche im Einkauf.",
        en: "Supplier evaluation and price comparison in purchasing.",
        zh: "采购部门的供应商评估和比价。"
      },
      highlights: [
        { de: "Bewertungsmodell für rund 40 Lieferanten in Excel aufgebaut", en: "Built an Excel scoring model for about 40 suppliers", zh: "用 Excel 为约 40 家供应商建立评分模型" }
      ],
      skills: ["excel"],
      sources: ["M01", "I10"]
    }
  ],

  education: [
    {
      id: "msc",
      short: { de: "M.Sc. Beispielstadt", en: "M.Sc. Beispielstadt", zh: "示例市硕士" },
      institution: { de: "Hochschule Beispielstadt", en: "Beispielstadt University of Applied Sciences", zh: "示例市应用科学大学" },
      studyType: { de: "Master of Science", en: "Master of Science", zh: "理学硕士" },
      area: { de: "Logistik und Supply Chain Management", en: "Logistics and Supply Chain Management", zh: "物流与供应链管理" },
      startDate: "2023-10",
      endDate: "2026-09",
      score: { value: "1,6", scale: "DE" },
      courses: [
        { name: { de: "Bestandsmanagement", en: "Inventory Management", zh: "库存管理" }, grade: "1,3", ects: 6 },
        { name: { de: "Prognoseverfahren", en: "Forecasting Methods", zh: "预测方法" }, grade: "1,0", ects: 6 },
        { name: { de: "Operations Research", en: "Operations Research", zh: "运筹学" }, grade: "1,7", ects: 6 }
      ],
      thesis: {
        title: {
          de: "Hierarchische Prognose der Kommissioniermengen in Mehrstandort-Lagern",
          en: "Hierarchical forecasting of picking volumes in multi-site warehouses",
          zh: "多仓库拣货量的层级预测"
        },
        grade: "1,3",
        story: "master-thesis"
      },
      stories: ["master-thesis"],
      evidence: ["doc-master-cert", "doc-transcript"],
      sources: ["M06", "M07", "I11"]
    },
    {
      id: "beng",
      short: { de: "B.Eng. Sichuan", en: "B.Eng. Sichuan", zh: "四川本科" },
      institution: { de: "Sichuan Example University", en: "Sichuan Example University", zh: "四川示例大学" },
      studyType: { de: "Bachelor of Engineering", en: "Bachelor of Engineering", zh: "工学学士" },
      area: { de: "Industrial Engineering", en: "Industrial Engineering", zh: "工业工程" },
      startDate: "2018-09",
      endDate: "2022-06",
      score: { value: "3,5 / 4,0 (GPA)", scale: "GPA" },
      thesis: {
        title: {
          de: "Lagerplatzvergabe nach Zugriffshäufigkeit in einem Ersatzteillager",
          en: "Assigning storage locations by access frequency in a spare-parts warehouse",
          zh: "按访问频率为备件仓库分配库位"
        },
        story: "bachelor-thesis"
      },
      stories: ["bachelor-thesis"],
      evidence: ["doc-bachelor-cert"],
      sources: ["M01", "M08", "I12"]
    }
  ],

  projects: [],

  journey: [
    { name: "Sichuan Example Univ.", place: { de: "Chengdu, China", en: "Chengdu, China", zh: "中国 · 成都" }, years: "2018–2022", label: { de: "Bachelor", en: "Bachelor's", zh: "本科" } },
    { name: "HS Beispielstadt", place: { de: "Beispielstadt", en: "Beispielstadt", zh: "德国 · 示例市" }, years: "2023–2026", label: { de: "Master", en: "Master's", zh: "硕士" } },
    { name: "Beispiel Logistik", place: { de: "Stuttgart", en: "Stuttgart", zh: "德国 · 斯图加特" }, years: "2024–2026", label: { de: "Werkstudentin", en: "Working student", zh: "Werkstudent" } }
  ],

  milestones: [
    { date: "2022-06", title: { de: "Bachelor in Chengdu", en: "Bachelor's in Chengdu", zh: "成都本科毕业" }, text: { de: "Industrial Engineering", en: "Industrial Engineering", zh: "工业工程" }, story: "bachelor-thesis" },
    { date: "2023-10", title: { de: "Nach Deutschland: Master", en: "To Germany: master's", zh: "来德国读硕士" }, text: { de: "Logistik und SCM", en: "Logistics and SCM", zh: "物流与供应链管理" } },
    { date: "2024-03", title: { de: "Werkstudentin bei Beispiel Logistik", en: "Working student at Beispiel Logistik", zh: "在 Beispiel Logistik 做 Werkstudent" }, text: { de: "Prognose für die Schichtplanung", en: "Forecast for shift planning", zh: "排班预测" }, story: "picking-forecast" },
    { date: "2025-06", title: { de: "1. Platz beim Hackathon", en: "1st place at the hackathon", zh: "黑客松第一名" }, text: { de: "31 Teams, 48 Stunden", en: "31 teams, 48 hours", zh: "31 支队伍，48 小时" }, story: "hackathon" },
    { date: "2026-09", title: { de: "Master mit 1,6", en: "Master's with 1.6", zh: "硕士毕业，成绩 1.6" }, text: { de: "Masterarbeit mit 1,3", en: "Thesis graded 1.3", zh: "论文成绩 1.3" }, story: "master-thesis" }
  ],

  stories: [
    {
      id: "picking-forecast",
      parent: "beispiel-logistik",
      kind: "work",
      featured: true,
      title: {
        de: "Wie viel wird morgen kommissioniert? Eine Prognose für die Schichtplanung",
        en: "How much will be picked tomorrow? A forecast for shift planning",
        zh: "明天要拣多少货？一个给排班用的预测"
      },
      standfirst: {
        de: "Aus Bauchgefühl wurde eine tägliche Prognose, mit der zwei Standorte ihre Schichten planen.",
        en: "Gut feeling became a daily forecast that two sites use to plan their shifts.",
        zh: "从凭经验估计，变成两个仓库每天排班都在用的预测。"
      },
      role: { de: "Konzeption und Umsetzung", en: "Design and build", zh: "设计与实现" },
      period: { start: "2024-06", end: "2025-03" },
      problem: {
        de: "Die Schichtleitungen schätzten das Arbeitsvolumen für den nächsten Tag aus Erfahrung. An Spitzentagen fehlten Leute, an ruhigen Tagen gab es Leerlauf.",
        en: "Shift leads estimated the next day's workload from experience. On peak days they were short-staffed; on quiet days people stood idle.",
        zh: "以前，各班组长凭经验估计第二天的工作量。高峰日人手不够，淡日又有人闲着。"
      },
      actions: [
        { de: "Auftrags- und Bewegungsdaten beider Standorte aus dem Lagerverwaltungssystem zusammengeführt", en: "Combined order and movement data from both sites' warehouse management system", zh: "整合两个仓库管理系统里的订单和出入库数据" },
        { de: "Prognosemodell in Python entwickelt und gegen die bisherigen Schätzungen getestet", en: "Built the forecasting model in Python and tested it against the previous estimates", zh: "用 Python 建立预测模型，并和以往的经验估计做对比测试" },
        { de: "Ergebnisse als Dashboard mit Schichtempfehlung für die Schichtleitungen aufbereitet", en: "Turned the results into a dashboard with a shift recommendation for the shift leads", zh: "把结果做成带排班建议的看板，交给班组长使用" }
      ],
      outcome: {
        de: "Die Prognose ist heute fester Bestandteil der täglichen Schichtplanung in Stuttgart und Ulm.",
        en: "The forecast is now a fixed part of daily shift planning in Stuttgart and Ulm.",
        zh: "这个预测现在是斯图加特和乌尔姆两个仓库每天排班的固定环节。"
      },
      metrics: [
        { value: "2", label: { de: "Standorte nutzen sie täglich", en: "sites use it daily", zh: "个仓库每天使用" }, sources: ["M03"] },
        { value: "6", label: { de: "Schichtleitungen arbeiten damit", en: "shift leads work with it", zh: "位班组长在用" }, sources: ["I06"] }
      ],
      media: [
        {
          src: "assets/img/forecast-dashboard.svg",
          type: "image",
          alt: { de: "Dashboard mit Prognose, Abweichung und Schichtempfehlung", en: "Dashboard with forecast, deviation and shift recommendation", zh: "显示预测值、偏差和排班建议的看板" },
          caption: { de: "Das Dashboard für die Schichtleitungen (Beispieldaten)", en: "The dashboard for shift leads (sample data)", zh: "给班组长用的看板（示例数据）" }
        }
      ],
      skills: ["python", "forecasting", "sql"],
      evidence: ["doc-zeugnis", "doc-reco-manager"],
      quotes: ["q-manager", "q-zeugnis"],
      sources: ["M03", "M05", "I05", "I06"]
    },
    {
      id: "master-thesis",
      parent: "msc",
      kind: "thesis",
      featured: true,
      title: {
        de: "Masterarbeit: Prognosefehler von 19,8 % auf 11,6 % gesenkt",
        en: "Master's thesis: cutting forecast error from 19.8% to 11.6%",
        zh: "硕士论文：把预测误差从 19.8% 降到 11.6%"
      },
      standfirst: {
        de: "Ein hierarchisches Modell, das Standorte und Artikelgruppen gemeinsam prognostiziert, mit 1,3 bewertet.",
        en: "A hierarchical model that forecasts sites and product groups together, graded 1.3.",
        zh: "一个同时预测仓库和品类的层级模型，论文成绩 1.3。"
      },
      role: { de: "Masterarbeit", en: "Master's thesis", zh: "硕士论文" },
      period: { start: "2026-03", end: "2026-09" },
      problem: {
        de: "Prognosen pro Standort und Artikelgruppe einzeln zu rechnen, liefert bei kleinen Gruppen stark schwankende und widersprüchliche Werte.",
        en: "Forecasting each site and product group separately gives volatile, inconsistent numbers for small groups.",
        zh: "把每个仓库、每个品类分开预测，小品类的结果波动很大，加总起来还互相矛盾。"
      },
      actions: [
        { de: "Einzel- und hierarchische Prognosemodelle auf zwei Jahren Lagerdaten verglichen", en: "Compared single and hierarchical forecasting models on two years of warehouse data", zh: "用两年的仓库数据比较单独预测和层级预测" },
        { de: "Ergebnisse mit den Schichtleitungen auf Praxistauglichkeit geprüft", en: "Checked the results for practical use with the shift leads", zh: "和班组长一起检验结果是否实用" },
        { de: "Ergebnisse im Kolloquium und auf einem Fachworkshop vorgestellt", en: "Presented the results at the thesis defence and at a workshop", zh: "在论文答辩和一个行业研讨会上展示成果" }
      ],
      outcome: {
        de: "Der mittlere Prognosefehler (MAPE) sank im zwölfwöchigen Test von 19,8 % auf 11,6 %. Die Arbeit wurde mit 1,3 bewertet.",
        en: "Mean forecast error (MAPE) fell from 19.8% to 11.6% in a twelve-week test. The thesis was graded 1.3.",
        zh: "在 12 周的测试中，平均预测误差（MAPE）从 19.8% 降到 11.6%。论文成绩 1.3。"
      },
      metrics: [
        { value: "11,6 %", label: { de: "Prognosefehler statt 19,8 %", en: "forecast error, down from 19.8%", zh: "预测误差（原为 19.8%）" }, sources: ["M06"] },
        { value: "1,3", label: { de: "Note der Masterarbeit", en: "thesis grade", zh: "论文成绩" }, sources: ["M06"] }
      ],
      media: [
        {
          src: "assets/img/thesis-defense.svg",
          type: "image",
          alt: { de: "Mei Chen präsentiert ihre Masterarbeit im Kolloquium", en: "Mei Chen presenting her master's thesis at the defence", zh: "陈梅在答辩会上展示硕士论文" },
          caption: { de: "Kolloquium der Masterarbeit, September 2026 (Illustration)", en: "Master's thesis defence, September 2026 (illustration)", zh: "硕士论文答辩，2026 年 9 月（示意图）" }
        },
        {
          src: "assets/img/thesis-result.svg",
          type: "image",
          alt: { de: "Diagramm: Prognosefehler von Einzel- und hierarchischem Modell", en: "Chart: forecast error of single and hierarchical model", zh: "图表：单独预测和层级预测的误差对比" },
          caption: { de: "Kernergebnis: hierarchisches Modell gegen Einzelprognose", en: "Key result: hierarchical model vs single forecasts", zh: "核心结果：层级模型对比单独预测" }
        },
        {
          src: "assets/img/thesis-defense-group.svg",
          type: "image",
          alt: { de: "Gruppenfoto nach dem bestandenen Kolloquium", en: "Group photo after passing the defence", zh: "答辩通过后的合影" },
          caption: { de: "Nach dem bestandenen Kolloquium (Illustration)", en: "After passing the defence (illustration)", zh: "答辩通过后（示意图）" }
        }
      ],
      skills: ["python", "forecasting", "statistics"],
      evidence: ["doc-master-cert", "doc-reco-prof"],
      quotes: ["q-prof"],
      sources: ["M06", "M09", "I11"]
    },
    {
      id: "hackathon",
      parent: "msc",
      kind: "competition",
      featured: true,
      title: {
        de: "48 Stunden, 1. Platz: Touren für Lastenräder",
        en: "48 hours, 1st place: routes for cargo bikes",
        zh: "48 小时拿下第一：给货运自行车规划路线"
      },
      standfirst: {
        de: "Mit drei Kommiliton:innen eine App gebaut, die Innenstadt-Touren für Lastenräder plant.",
        en: "Built an app with three fellow students that plans inner-city routes for cargo bikes.",
        zh: "和三位同学一起做了一个给市中心货运自行车规划路线的应用。"
      },
      role: { de: "Datenmodell und Routing-Algorithmus", en: "Data model and routing algorithm", zh: "负责数据模型和路径算法" },
      period: { date: "2025-06" },
      problem: {
        de: "Lieferdienste planen Lastenrad-Touren oft von Hand, obwohl Steigungen, Ladekapazität und Lieferfenster die Planung schwierig machen.",
        en: "Delivery services often plan cargo-bike routes by hand, even though gradients, load capacity and delivery windows make it hard.",
        zh: "配送公司常常手工规划货运自行车路线，但坡度、载重和送达时间窗让规划很难做好。"
      },
      actions: [
        { de: "Datenmodell für Stopps, Lieferfenster und Ladekapazität entworfen", en: "Designed the data model for stops, delivery windows and load capacity", zh: "设计停靠点、送达时间窗和载重的数据模型" },
        { de: "Routing mit Python und einem offenen Optimierungs-Solver umgesetzt", en: "Implemented routing with Python and an open-source optimisation solver", zh: "用 Python 和开源优化求解器实现路径规划" },
        { de: "Ergebnis vor der Jury in fünf Minuten live vorgeführt", en: "Demoed the result live to the jury in five minutes", zh: "在 5 分钟内向评委现场演示" }
      ],
      outcome: {
        de: "1. Platz unter 31 Teams. Im Testszenario waren die Touren 23 % kürzer als die Handplanung.",
        en: "1st place out of 31 teams. In the test scenario, routes were 23% shorter than manual planning.",
        zh: "在 31 支队伍中获得第一名。测试场景下，路线比手工规划短 23%。"
      },
      metrics: [
        { value: "1.", label: { de: "Platz von 31 Teams", en: "place out of 31 teams", zh: "名（共 31 队）" }, sources: ["M10"] },
        { value: "−23 %", label: { de: "Strecke gegenüber Handplanung", en: "distance vs manual planning", zh: "路程（对比手工规划）" }, sources: ["I14"] }
      ],
      media: [
        {
          src: "assets/img/hackathon-team.svg",
          type: "image",
          alt: { de: "Team RouteRadler mit dem Preis auf der Bühne", en: "Team RouteRadler on stage with the prize", zh: "RouteRadler 团队在台上领奖" },
          caption: { de: "Siegerehrung, Beispiel Logistics Hackathon 2025 (Illustration)", en: "Award ceremony, Beispiel Logistics Hackathon 2025 (illustration)", zh: "颁奖现场，2025 示例物流黑客松（示意图）" }
        },
        {
          src: "assets/img/hackathon-app.svg",
          type: "image",
          alt: { de: "App-Ansicht mit Karte, Route und Tourenliste", en: "App view with map, route and list of tours", zh: "应用界面：地图、路线和路线列表" },
          caption: { de: "Die App: geplante Touren auf der Karte", en: "The app: planned routes on the map", zh: "应用界面：地图上的规划路线" }
        },
        {
          src: "assets/img/docs/hackathon-certificate-preview.png",
          type: "image",
          alt: { de: "Urkunde für den 1. Platz", en: "Certificate for 1st place", zh: "第一名证书" },
          caption: { de: "Urkunde (Muster)", en: "Certificate (sample)", zh: "获奖证书（样本）" }
        }
      ],
      skills: ["python", "optimization"],
      evidence: ["doc-hackathon-cert"],
      sources: ["M10", "I13", "I14"]
    },
    {
      id: "kpi-report",
      parent: "beispiel-logistik",
      kind: "work",
      title: {
        de: "Ein Wochenreport, den die Standortleitungen wirklich lesen",
        en: "A weekly report site managers actually read",
        zh: "一份站点负责人真的会看的周报"
      },
      standfirst: {
        de: "23 Excel-Tabellen wurden zu einem Power-BI-Report mit vier Kennzahlen.",
        en: "23 Excel sheets became one Power BI report with four KPIs.",
        zh: "把 23 张 Excel 表合成一份只看四个指标的 Power BI 报表。"
      },
      role: { de: "Umsetzung", en: "Build", zh: "实现" },
      period: { start: "2025-04", end: "2025-07" },
      problem: {
        de: "Die Kennzahlen lagen in vielen einzelnen Excel-Tabellen. Jede Woche dauerte es Stunden, sie zusammenzuführen.",
        en: "KPIs lived in many separate Excel sheets, and merging them took hours every week.",
        zh: "指标散落在很多张 Excel 表里，每周合并都要花好几个小时。"
      },
      actions: [
        { de: "Mit den Standortleitungen die vier wichtigsten Kennzahlen festgelegt", en: "Agreed the four key KPIs with the site managers", zh: "和站点负责人一起确定四个最重要的指标" },
        { de: "Datenmodell in SQL und Report in Power BI aufgebaut", en: "Built the data model in SQL and the report in Power BI", zh: "用 SQL 建数据模型，用 Power BI 做报表" }
      ],
      outcome: {
        de: "Der Report wird jeden Montag automatisch aktualisiert.",
        en: "The report refreshes automatically every Monday.",
        zh: "报表每周一自动更新。"
      },
      metrics: [
        { value: "23 → 1", label: { de: "Excel-Tabellen zu einem Report", en: "Excel sheets into one report", zh: "张 Excel 表合成一份报表" }, sources: ["I07"] }
      ],
      media: [
        {
          src: "assets/img/powerbi-report.svg",
          type: "image",
          alt: { de: "Power-BI-Report mit vier Kennzahlen und Standortvergleich", en: "Power BI report with four KPIs and a site comparison", zh: "包含四个指标和站点对比的 Power BI 报表" },
          caption: { de: "Wochenreport für die Standortleitungen (Beispieldaten)", en: "Weekly report for the site managers (sample data)", zh: "给站点负责人的周报（示例数据）" }
        }
      ],
      skills: ["powerbi", "sql"],
      evidence: ["doc-zeugnis"],
      sources: ["M03", "I07"]
    },
    {
      id: "bachelor-thesis",
      parent: "beng",
      kind: "thesis",
      title: {
        de: "Bachelorarbeit: Kürzere Laufwege durch bessere Lagerplatzvergabe",
        en: "Bachelor's thesis: shorter walking distances through smarter slotting",
        zh: "本科论文：优化库位分配，缩短拣货路程"
      },
      standfirst: {
        de: "Häufig gebrauchte Ersatzteile näher an den Ausgang – in der Simulation 14 % weniger Laufweg.",
        en: "Frequently used spare parts closer to the exit: 14% less walking in the simulation.",
        zh: "把常用备件放得离出口更近：仿真中拣货路程减少 14%。"
      },
      role: { de: "Bachelorarbeit", en: "Bachelor's thesis", zh: "本科论文" },
      period: { start: "2022-02", end: "2022-06" },
      problem: {
        de: "Im untersuchten Ersatzteillager lagen viel genutzte Teile oft weit vom Ausgang entfernt.",
        en: "In the spare-parts warehouse studied, frequently used parts were often stored far from the exit.",
        zh: "在研究的备件仓库里，常用零件经常放在离出口很远的地方。"
      },
      actions: [
        { de: "Zugriffshäufigkeit aller Lagerplätze über ein Jahr ausgewertet", en: "Analysed one year of access frequency for every storage location", zh: "统计了每个库位一年的访问频率" },
        { de: "Neue Platzvergabe in einer Lagersimulation getestet", en: "Tested the new slotting in a warehouse simulation", zh: "在仓储仿真中测试新的库位分配" }
      ],
      outcome: {
        de: "Die neue Vergabe verkürzte den Laufweg in der Simulation um 14 %.",
        en: "The new slotting cut walking distance by 14% in the simulation.",
        zh: "新的库位分配在仿真中把拣货路程缩短了 14%。"
      },
      metrics: [
        { value: "−14 %", label: { de: "Laufweg in der Simulation", en: "walking distance in simulation", zh: "仿真中的拣货路程" }, sources: ["M08"] }
      ],
      media: [
        {
          src: "assets/img/bachelor-heatmap.svg",
          type: "image",
          alt: { de: "Heatmap der Zugriffe pro Lagerplatz", en: "Heatmap of accesses per storage location", zh: "每个库位访问次数的热力图" },
          caption: { de: "Zugriffe pro Lagerplatz: Hotspots nahe dem Ausgang (Beispieldaten)", en: "Accesses per location: hotspots near the exit (sample data)", zh: "各库位访问次数：高频区域靠近出口（示例数据）" }
        }
      ],
      skills: ["simulation", "excel"],
      evidence: ["doc-bachelor-cert"],
      sources: ["M08", "I12"]
    }
  ],

  skills: [
    { id: "python", name: "Python", category: "data" },
    { id: "sql", name: "SQL", category: "data" },
    { id: "forecasting", name: { de: "Prognosemodelle", en: "Forecasting", zh: "预测建模" }, category: "data" },
    { id: "statistics", name: { de: "Statistik", en: "Statistics", zh: "统计" }, category: "data" },
    { id: "optimization", name: { de: "Tourenoptimierung", en: "Route optimisation", zh: "路径优化" }, category: "logistics" },
    { id: "simulation", name: { de: "Lagersimulation", en: "Warehouse simulation", zh: "仓储仿真" }, category: "logistics" },
    { id: "powerbi", name: "Power BI", category: "tools" },
    { id: "excel", name: "Excel", category: "tools" }
  ],

  languages: [
    { language: { de: "Chinesisch", en: "Chinese", zh: "中文" }, cefr: "native" },
    {
      language: { de: "Deutsch", en: "German", zh: "德语" },
      cefr: "C1",
      certificate: "cert-de",
      use: { de: "Arbeitssprache bei Beispiel Logistik", en: "Working language at Beispiel Logistik", zh: "在 Beispiel Logistik 的工作语言" }
    },
    { language: { de: "Englisch", en: "English", zh: "英语" }, cefr: "C1", use: { de: "Studium und Fachliteratur", en: "Studies and technical literature", zh: "学习和专业文献" } }
  ],

  certificates: [
    {
      id: "cert-de",
      name: "Zertifikat Deutsch C1",
      issuer: { de: "Beispiel-Sprachinstitut", en: "Beispiel Language Institute", zh: "示例语言学院" },
      date: "2023-11",
      level: "C1",
      document: "doc-lang-cert",
      sources: ["M04"]
    }
  ],

  awards: [
    {
      id: "award-hackathon",
      title: { de: "1. Platz, Beispiel Logistics Hackathon", en: "1st place, Beispiel Logistics Hackathon", zh: "示例物流黑客松第一名" },
      awarder: "Beispiel Logistics Hackathon",
      date: "2025-06",
      level: "regional",
      summary: { de: "Unter 31 Teams, Preisgeld 1.000 €", en: "Out of 31 teams, €1,000 prize", zh: "31 支队伍中第一，奖金 1000 欧元" },
      story: "hackathon",
      document: "doc-hackathon-cert",
      sources: ["M10"]
    },
    {
      id: "award-scholarship",
      title: { de: "Beispielstadt-Stipendium 2024/25", en: "Beispielstadt Scholarship 2024/25", zh: "示例市奖学金 2024/25" },
      awarder: { de: "Hochschule Beispielstadt", en: "Beispielstadt University of Applied Sciences", zh: "示例市应用科学大学" },
      date: "2024-10",
      level: "university",
      summary: { de: "Für Studienleistung und Engagement in der Fachschaft", en: "For academic performance and student council work", zh: "表彰学业成绩和学生会工作" },
      sources: ["M11"]
    }
  ],

  publications: [
    {
      name: {
        de: "Hierarchische Kommissionierprognosen für Mehrstandort-Lager",
        en: "Hierarchical picking forecasts for multi-site warehouses",
        zh: "多仓库拣货量的层级预测"
      },
      publisher: "Beispiel Logistics Workshop 2026",
      releaseDate: "2026-05",
      summary: { de: "Kurzbeitrag mit Prof. Dr. Anna Beispiel", en: "Short paper with Prof. Dr. Anna Beispiel", zh: "与 Anna Beispiel 教授合作的短文" },
      story: "master-thesis",
      sources: ["M12"]
    }
  ],

  quotes: [
    {
      id: "q-prof",
      text: {
        de: "„Besonders beeindruckt hat mich, wie selbstständig sie die Daten zweier Standorte aufbereitet und die Ergebnisse mit der Praxis abgestimmt hat.“",
        en: "“What impressed me most was how independently she prepared the data from two sites and checked the results against practice.”",
        zh: "“最让我印象深刻的，是她独立整理了两个仓库的数据，并且和一线实践反复核对了结果。”"
      },
      original: "de",
      author: "Prof. Dr. Anna Beispiel",
      authorTitle: { de: "Betreuerin der Masterarbeit, Hochschule Beispielstadt", en: "Master's thesis supervisor, Hochschule Beispielstadt", zh: "硕士论文导师，Hochschule Beispielstadt" },
      document: "doc-reco-prof",
      consent: "yes",
      sources: ["M09"]
    },
    {
      id: "q-manager",
      text: {
        de: "„Sie macht aus unübersichtlichen Betriebsdaten Werkzeuge, die die Kolleg:innen tatsächlich nutzen.“",
        en: "“She turns messy operational data into tools that colleagues actually use.”",
        zh: "“她能把杂乱的运营数据变成同事们真正会用的工具。”"
      },
      original: "en",
      author: "Dr. Max Mustermann",
      authorTitle: { de: "Leiter Logistik-Controlling, Beispiel Logistik GmbH", en: "Head of Logistics Controlling, Beispiel Logistik GmbH", zh: "物流控制部负责人，Beispiel Logistik GmbH" },
      document: "doc-reco-manager",
      consent: "yes",
      sources: ["M05"]
    },
    {
      id: "q-zeugnis",
      text: {
        de: "„Besonders hervorzuheben ist ihre analytische und strukturierte Arbeitsweise.“",
        en: "“Her analytical and structured way of working deserves special mention.”",
        zh: "“尤其值得一提的是她善于分析、条理清晰的工作方式。”"
      },
      original: "de",
      author: "Beispiel Logistik GmbH",
      authorTitle: { de: "Arbeitszeugnis", en: "Employer reference", zh: "工作证明" },
      document: "doc-zeugnis",
      consent: "not-needed",
      sources: ["M03"]
    }
  ],

  documents: [
    {
      id: "doc-master-cert",
      material: "M07",
      title: { de: "Masterzeugnis", en: "Master's degree certificate", zh: "硕士学位证明" },
      kind: "degree",
      date: "2026-09",
      visibility: "preview",
      preview: "assets/img/docs/master-certificate-preview.png",
      thumbnail: "assets/img/docs/master-certificate-thumb.png"
    },
    {
      id: "doc-bachelor-cert",
      material: "M08",
      title: { de: "Bachelor-Urkunde", en: "Bachelor's degree certificate", zh: "学士学位证书" },
      kind: "degree",
      date: "2022-06",
      visibility: "preview",
      preview: "assets/img/docs/bachelor-certificate-preview.png",
      thumbnail: "assets/img/docs/bachelor-certificate-thumb.png"
    },
    {
      id: "doc-hackathon-cert",
      material: "M10",
      title: { de: "Urkunde 1. Platz, Hackathon 2025", en: "1st place certificate, Hackathon 2025", zh: "2025 黑客松第一名证书" },
      kind: "award",
      date: "2025-06",
      visibility: "preview",
      preview: "assets/img/docs/hackathon-certificate-preview.png",
      thumbnail: "assets/img/docs/hackathon-certificate-thumb.png"
    },
    {
      id: "doc-reco-prof",
      material: "M09",
      title: { de: "Empfehlungsschreiben Prof. Dr. Beispiel", en: "Recommendation letter, Prof. Dr. Beispiel", zh: "Beispiel 教授推荐信" },
      kind: "recommendation",
      date: "2026-09",
      visibility: "preview",
      preview: "assets/img/docs/recommendation-professor-preview.png",
      thumbnail: "assets/img/docs/recommendation-professor-thumb.png"
    },
    {
      id: "doc-reco-manager",
      material: "M05",
      title: { de: "Empfehlungsschreiben Dr. Mustermann", en: "Recommendation letter, Dr. Mustermann", zh: "Mustermann 博士推荐信" },
      kind: "recommendation",
      date: "2026-08",
      visibility: "preview",
      preview: "assets/img/docs/recommendation-manager-preview.png",
      thumbnail: "assets/img/docs/recommendation-manager-thumb.png"
    },
    {
      id: "doc-lang-cert",
      material: "M04",
      title: { de: "Zertifikat Deutsch C1", en: "German C1 certificate", zh: "德语 C1 证书" },
      kind: "certificate",
      date: "2023-11",
      visibility: "preview",
      preview: "assets/img/docs/language-certificate-preview.png",
      thumbnail: "assets/img/docs/language-certificate-thumb.png"
    },
    {
      id: "doc-zeugnis",
      material: "M03",
      title: { de: "Arbeitszeugnis Beispiel Logistik GmbH", en: "Employer reference, Beispiel Logistik GmbH", zh: "Beispiel Logistik 工作证明" },
      kind: "reference",
      date: "2026-08",
      visibility: "on-request",
      summary: {
        de: "Qualifiziertes Arbeitszeugnis über die Tätigkeit als Werkstudentin, auf Anfrage erhältlich.",
        en: "Full employer reference for the working-student role, available on request.",
        zh: "完整的 Werkstudent 工作证明，可按需提供。"
      }
    },
    {
      id: "doc-transcript",
      material: "M06",
      title: { de: "Notenspiegel M.Sc.", en: "Transcript of records, M.Sc.", zh: "硕士成绩单" },
      kind: "transcript",
      date: "2026-09",
      visibility: "on-request",
      summary: {
        de: "Vollständiger Notenspiegel, auf Anfrage erhältlich.",
        en: "Full transcript of records, available on request.",
        zh: "完整成绩单，可按需提供。"
      }
    }
  ],

  about: {
    text: {
      de: "Im Bachelor in Chengdu habe ich gemerkt, dass mich weniger die Theorie der Logistik interessiert als die Frage, warum Abläufe im Lager im Alltag anders laufen als geplant. Deshalb bin ich 2023 für den Master nach Deutschland gekommen, wo die Logistikbranche besonders stark ist.\n\nAm liebsten arbeite ich nah an den Menschen, die meine Auswertungen später nutzen: Ein Modell ist für mich erst fertig, wenn die Schichtleitung damit plant.",
      en: "During my bachelor's in Chengdu I realised that I'm less interested in logistics theory than in why warehouse operations run differently from the plan. That's why I came to Germany in 2023 for my master's: its logistics industry is especially strong.\n\nI like working close to the people who use my analyses: for me, a model is only finished when the shift lead plans with it.",
      zh: "在成都读本科时，我发现自己更感兴趣的不是物流理论，而是仓库的实际运作为什么总和计划不一样。所以 2023 年我来到物流业特别发达的德国读硕士。\n\n我喜欢和真正使用我分析结果的人一起工作：对我来说，模型只有在班组长真的用它排班之后才算完成。"
    },
    interests: [
      { de: "Backen", en: "Baking", zh: "烘焙" },
      { de: "Bouldern", en: "Bouldering", zh: "攀岩" },
      { de: "Fotografie", en: "Photography", zh: "摄影" }
    ],
    sources: ["M02", "I15", "I16"]
  },

  contact: {
    cta: {
      de: "Ich freue mich auf Ihre Nachricht.",
      en: "I'd be glad to hear from you.",
      zh: "期待你的消息。"
    },
    showEmail: true
  },

  ui: {
    de: { cat_logistics: "Logistik" },
    en: { cat_logistics: "Logistics" },
    zh: { cat_logistics: "物流" }
  }
};
