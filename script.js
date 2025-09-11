(function(){
  const root = document.getElementById('ecs-calc');
  const $ = sel => root.querySelector(sel);

  const pageLang = (document.documentElement.lang || 'en').split('-')[0];
  const translations = {
    en: {
      documentTitle: "Crate Savings Calculator",
      titlePart1: "Crate",
      titlePart2: "Savings Calculator",
      tagline: "Calculate your packaging savings with durable plastic crates versus cardboard boxes",
      previous: "Previous",
      nextStep: "Next Step",
      cta: "Get Your Free Quote",
      alertMessage: "Contact us through our website for your free quote!",
      stepIndicator1: "Your Current Packaging Costs",
      stepIndicator2: "ECS Crate Solution",
      stepIndicator3: "Cost Comparison",
      step1Header: "Step 1: Your Current Packaging Costs",
      step1Desc: "Enter your current packaging costs and delivery frequency",
      pricePerBoxLabel: "Your price per cardboard box (180 eggs)",
      pricePerTrayLabel: "Your price per cardboard tray",
      boxesPerDeliveryLabel: "Boxes per delivery",
      deliveriesPerWeekLabel: "Deliveries per week",
      weeklyVolumeTitle: "Weekly Volume",
      weeklyVolumeText: "You ship {boxesPerWeek} boxes per week ({boxesPerShipment} boxes × {shipmentsPerWeek} shipments)",
      weeklyCostTitle: "Weekly packaging cost",
      costBreakdown: "= {boxesPerWeek} {unitBoxes} × ( {currency}{pricePerBox} + 7 × {currency}{pricePerTray} )",
      unitBoxes: "boxes",
      unitCrates: "crates",
      unitYears: "years",
      step2Header: "Step 2: Durable Plastic Crate Solution",
      step2Desc: "Sustainable crates that last 10 years and eliminate the need for cardboard boxes and paper trays",
      whyCratesTitle: "Why 3× crates needed?",
      whyCratesText: "You need 3 sets of crates in rotation: 1 set for cleaning, 1 set in return transport, and 1 set for current shipment. This ensures continuous operation. In this new setup, we assume plastic egg trays are already being used.",
      crateRequirementsTitle: "Crate Requirements",
      cratesPerShipmentLabel: "Crates per shipment",
      rotationFactorLabel: "Rotation factor",
      totalCratesNeededLabel: "Total crates needed",
      rotationHelp: "3 sets needed for rotation cycle",
      fixedPricingTitle: "Fixed Pricing",
      pricePerCrateLabel: "Price per crate",
      lifespanLabel: "Lifespan",
      totalInvestmentLabel: "Total investment",
      oneTimeInvestmentHelp: "One-time investment",
      annualCostTitle: "Annual Cost",
      investmentLabel: "Investment",
      dividedByLabel: "Divided by",
      costPerYearLabel: "Cost per year",
      amortizedHelp: "Amortized over lifespan",
      step3Header: "Step 3: Cost Comparison & Savings",
      step3Desc: "See how crates save you money compared to cardboard boxes",
      totalSavingsTitle: "Your Total Savings with crates",
      totalSavingsTenYear: "Total savings over 10 years",
      savePerWeek: "Save per Week",
      savePerMonth: "Save per Month",
      savePerYear: "Save per Year",
      decrease: "Decrease {label}",
      increase: "Increase {label}"
    },
    nl: {
      documentTitle: "Besparingscalculator voor kratten",
      titlePart1: "Kratten",
      titlePart2: "Besparingscalculator",
      tagline: "Bereken je verpakkingsbesparing met duurzame kunststof kratten in plaats van kartonnen dozen",
      previous: "Vorige",
      nextStep: "Volgende stap",
      cta: "Vraag een gratis offerte aan",
      alertMessage: "Neem contact met ons op via onze website voor jouw gratis offerte!",
      stepIndicator1: "Je huidige verpakkingskosten",
      stepIndicator2: "ECS-krattenoplossing",
      stepIndicator3: "Kostenvergelijking",
      step1Header: "Stap 1: Je huidige verpakkingskosten",
      step1Desc: "Voer je huidige verpakkingskosten en leveringsfrequentie in",
      pricePerBoxLabel: "Jouw prijs per kartonnen doos (180 eieren)",
      pricePerTrayLabel: "Jouw prijs per kartonnen tray",
      boxesPerDeliveryLabel: "Dozen per levering",
      deliveriesPerWeekLabel: "Leveringen per week",
      weeklyVolumeTitle: "Wekelijks volume",
      weeklyVolumeText: "Je verzendt {boxesPerWeek} dozen per week ({boxesPerShipment} dozen × {shipmentsPerWeek} leveringen)",
      weeklyCostTitle: "Wekelijkse verpakkingskosten",
      costBreakdown: "= {boxesPerWeek} {unitBoxes} × ( {currency}{pricePerBox} + 7 × {currency}{pricePerTray} )",
      unitBoxes: "dozen",
      unitCrates: "kratten",
      unitYears: "jaar",
      step2Header: "Stap 2: Duurzame kunststof krattenoplossing",
      step2Desc: "Duurzame kratten die 10 jaar meegaan en kartonnen dozen en papieren trays overbodig maken",
      whyCratesTitle: "Waarom 3× kratten nodig?",
      whyCratesText: "Je hebt 3 sets kratten in rotatie nodig: 1 set voor reiniging, 1 set in retourtransport en 1 set voor de huidige zending. Dit zorgt voor een continue werking. In deze nieuwe opzet gaan we ervan uit dat plastic eiertrays al worden gebruikt.",
      crateRequirementsTitle: "Vereisten kratten",
      cratesPerShipmentLabel: "Kratten per zending",
      rotationFactorLabel: "Rotatiefactor",
      totalCratesNeededLabel: "Totaal benodigde kratten",
      rotationHelp: "3 sets nodig voor rotatiecyclus",
      fixedPricingTitle: "Vaste prijsstelling",
      pricePerCrateLabel: "Prijs per krat",
      lifespanLabel: "Levensduur",
      totalInvestmentLabel: "Totale investering",
      oneTimeInvestmentHelp: "Eenmalige investering",
      annualCostTitle: "Jaarlijkse kosten",
      investmentLabel: "Investering",
      dividedByLabel: "Gedeeld door",
      costPerYearLabel: "Kosten per jaar",
      amortizedHelp: "Gespreid over levensduur",
      step3Header: "Stap 3: Kostenvergelijking & besparingen",
      step3Desc: "Zie hoe kratten je geld besparen vergeleken met kartonnen dozen",
      totalSavingsTitle: "Je totale besparing met kratten",
      totalSavingsTenYear: "Totale besparing over 10 jaar",
      savePerWeek: "Besparing per week",
      savePerMonth: "Besparing per maand",
      savePerYear: "Besparing per jaar",
      decrease: "Verlaag {label}",
      increase: "Verhoog {label}"
    },
    fr: {
      documentTitle: "Calculateur d'économies de caisses",
      titlePart1: "Calculateur",
      titlePart2: "d'économies de caisses",
      tagline: "Calculez vos économies d'emballage avec des caisses en plastique durables plutôt que des boîtes en carton",
      previous: "Précédent",
      nextStep: "Étape suivante",
      cta: "Obtenez votre devis gratuit",
      alertMessage: "Contactez-nous via notre site web pour obtenir votre devis gratuit !",
      stepIndicator1: "Vos coûts d'emballage actuels",
      stepIndicator2: "Solution de caisse ECS",
      stepIndicator3: "Comparaison des coûts",
      step1Header: "Étape 1 : Vos coûts d'emballage actuels",
      step1Desc: "Entrez vos coûts d'emballage actuels et la fréquence de livraison",
      pricePerBoxLabel: "Votre prix par boîte en carton (180 œufs)",
      pricePerTrayLabel: "Votre prix par plateau en carton",
      boxesPerDeliveryLabel: "Boîtes par livraison",
      deliveriesPerWeekLabel: "Livraisons par semaine",
      weeklyVolumeTitle: "Volume hebdomadaire",
      weeklyVolumeText: "Vous expédiez {boxesPerWeek} boîtes par semaine ({boxesPerShipment} boîtes × {shipmentsPerWeek} livraisons)",
      weeklyCostTitle: "Coût d'emballage hebdomadaire",
      costBreakdown: "= {boxesPerWeek} {unitBoxes} × ( {currency}{pricePerBox} + 7 × {currency}{pricePerTray} )",
      unitBoxes: "boîtes",
      unitCrates: "caisses",
      unitYears: "ans",
      step2Header: "Étape 2 : Solution de caisse en plastique durable",
      step2Desc: "Des caisses durables qui durent 10 ans et éliminent le besoin de boîtes en carton et de plateaux en papier",
      whyCratesTitle: "Pourquoi 3× caisses nécessaires ?",
      whyCratesText: "Vous avez besoin de 3 jeux de caisses en rotation : 1 jeu pour le nettoyage, 1 jeu en transport de retour et 1 jeu pour l'expédition en cours. Cela garantit un fonctionnement continu. Dans cette nouvelle configuration, nous supposons que des plateaux à œufs en plastique sont déjà utilisés.",
      crateRequirementsTitle: "Exigences en caisses",
      cratesPerShipmentLabel: "Caisses par expédition",
      rotationFactorLabel: "Facteur de rotation",
      totalCratesNeededLabel: "Nombre total de caisses nécessaires",
      rotationHelp: "3 jeux nécessaires pour le cycle de rotation",
      fixedPricingTitle: "Tarification fixe",
      pricePerCrateLabel: "Prix par caisse",
      lifespanLabel: "Durée de vie",
      totalInvestmentLabel: "Investissement total",
      oneTimeInvestmentHelp: "Investissement unique",
      annualCostTitle: "Coût annuel",
      investmentLabel: "Investissement",
      dividedByLabel: "Divisé par",
      costPerYearLabel: "Coût par an",
      amortizedHelp: "Amorti sur la durée de vie",
      step3Header: "Étape 3 : Comparaison des coûts et économies",
      step3Desc: "Découvrez comment les caisses vous font économiser de l'argent par rapport aux boîtes en carton",
      totalSavingsTitle: "Vos économies totales avec les caisses",
      totalSavingsTenYear: "Économies totales sur 10 ans",
      savePerWeek: "Économie par semaine",
      savePerMonth: "Économie par mois",
      savePerYear: "Économie par an",
      decrease: "Diminuer {label}",
      increase: "Augmenter {label}"
    },
    es: {
      documentTitle: "Calculadora de Ahorro de Cajas",
      titlePart1: "Calculadora de",
      titlePart2: "Ahorro de Cajas",
      tagline: "Calcula tus ahorros de embalaje con cajas de plástico duraderas frente a cajas de cartón",
      previous: "Anterior",
      nextStep: "Siguiente paso",
      cta: "Obtén tu cotización gratis",
      alertMessage: "¡Contáctanos a través de nuestro sitio web para tu cotización gratis!",
      stepIndicator1: "Tus costos actuales de embalaje",
      stepIndicator2: "Solución de cajas ECS",
      stepIndicator3: "Comparación de costos",
      step1Header: "Paso 1: Tus costos actuales de embalaje",
      step1Desc: "Ingresa tus costos actuales de embalaje y frecuencia de entrega",
      pricePerBoxLabel: "Tu precio por caja de cartón (180 huevos)",
      pricePerTrayLabel: "Tu precio por bandeja de cartón",
      boxesPerDeliveryLabel: "Cajas por entrega",
      deliveriesPerWeekLabel: "Entregas por semana",
      weeklyVolumeTitle: "Volumen semanal",
      weeklyVolumeText: "Envías {boxesPerWeek} cajas por semana ({boxesPerShipment} cajas × {shipmentsPerWeek} entregas)",
      weeklyCostTitle: "Costo de embalaje semanal",
      costBreakdown: "= {boxesPerWeek} {unitBoxes} × ( {currency}{pricePerBox} + 7 × {currency}{pricePerTray} )",
      unitBoxes: "cajas",
      unitCrates: "cajas",
      unitYears: "años",
      step2Header: "Paso 2: Solución de cajas plásticas duraderas",
      step2Desc: "Cajas sostenibles que duran 10 años y eliminan la necesidad de cajas de cartón y bandejas de papel",
      whyCratesTitle: "¿Por qué se necesitan 3× cajas?",
      whyCratesText: "Necesitas 3 juegos de cajas en rotación: 1 juego para limpieza, 1 juego en transporte de retorno y 1 juego para el envío actual. Esto asegura operación continua. En esta nueva configuración, asumimos que ya se utilizan bandejas de plástico para huevos.",
      crateRequirementsTitle: "Requisitos de cajas",
      cratesPerShipmentLabel: "Cajas por envío",
      rotationFactorLabel: "Factor de rotación",
      totalCratesNeededLabel: "Total de cajas necesarias",
      rotationHelp: "Se necesitan 3 juegos para el ciclo de rotación",
      fixedPricingTitle: "Precio fijo",
      pricePerCrateLabel: "Precio por caja",
      lifespanLabel: "Vida útil",
      totalInvestmentLabel: "Inversión total",
      oneTimeInvestmentHelp: "Inversión única",
      annualCostTitle: "Costo anual",
      investmentLabel: "Inversión",
      dividedByLabel: "Dividido entre",
      costPerYearLabel: "Costo por año",
      amortizedHelp: "Amortizado durante la vida útil",
      step3Header: "Paso 3: Comparación de costos y ahorros",
      step3Desc: "Ve cómo las cajas te ahorran dinero frente a las cajas de cartón",
      totalSavingsTitle: "Tus ahorros totales con cajas",
      totalSavingsTenYear: "Ahorro total durante 10 años",
      savePerWeek: "Ahorro por semana",
      savePerMonth: "Ahorro por mes",
      savePerYear: "Ahorro por año",
      decrease: "Disminuir {label}",
      increase: "Aumentar {label}"
    },
    it: {
      documentTitle: "Calcolatore di risparmio delle casse",
      titlePart1: "Calcolatore",
      titlePart2: "di risparmio delle casse",
      tagline: "Calcola il risparmio di imballaggio con casse di plastica durevoli invece che con scatole di cartone",
      previous: "Precedente",
      nextStep: "Prossimo passaggio",
      cta: "Ottieni un preventivo gratuito",
      alertMessage: "Contattaci tramite il nostro sito web per il tuo preventivo gratuito!",
      stepIndicator1: "I tuoi costi di imballaggio attuali",
      stepIndicator2: "Soluzione di casse ECS",
      stepIndicator3: "Confronto dei costi",
      step1Header: "Passo 1: I tuoi costi di imballaggio attuali",
      step1Desc: "Inserisci i tuoi costi di imballaggio attuali e la frequenza di consegna",
      pricePerBoxLabel: "Il tuo prezzo per scatola di cartone (180 uova)",
      pricePerTrayLabel: "Il tuo prezzo per vassoio di cartone",
      boxesPerDeliveryLabel: "Scatole per consegna",
      deliveriesPerWeekLabel: "Consegne per settimana",
      weeklyVolumeTitle: "Volume settimanale",
      weeklyVolumeText: "Spedisci {boxesPerWeek} scatole a settimana ({boxesPerShipment} scatole × {shipmentsPerWeek} consegne)",
      weeklyCostTitle: "Costo di imballaggio settimanale",
      costBreakdown: "= {boxesPerWeek} {unitBoxes} × ( {currency}{pricePerBox} + 7 × {currency}{pricePerTray} )",
      unitBoxes: "scatole",
      unitCrates: "casse",
      unitYears: "anni",
      step2Header: "Passo 2: Soluzione di casse di plastica durevoli",
      step2Desc: "Casse sostenibili che durano 10 anni ed eliminano la necessità di scatole di cartone e vassoi di carta",
      whyCratesTitle: "Perché sono necessarie 3× casse?",
      whyCratesText: "Hai bisogno di 3 set di casse in rotazione: 1 set per la pulizia, 1 set nel trasporto di ritorno e 1 set per la spedizione corrente. Ciò garantisce un funzionamento continuo. In questa nuova configurazione, si presume che vengano già utilizzati vassoi di plastica per uova.",
      crateRequirementsTitle: "Requisiti delle casse",
      cratesPerShipmentLabel: "Casse per spedizione",
      rotationFactorLabel: "Fattore di rotazione",
      totalCratesNeededLabel: "Casse totali necessarie",
      rotationHelp: "3 set necessari per il ciclo di rotazione",
      fixedPricingTitle: "Prezzo fisso",
      pricePerCrateLabel: "Prezzo per cassa",
      lifespanLabel: "Durata",
      totalInvestmentLabel: "Investimento totale",
      oneTimeInvestmentHelp: "Investimento una tantum",
      annualCostTitle: "Costo annuale",
      investmentLabel: "Investimento",
      dividedByLabel: "Diviso per",
      costPerYearLabel: "Costo per anno",
      amortizedHelp: "Ammortizzato sulla durata",
      step3Header: "Passo 3: Confronto dei costi e risparmi",
      step3Desc: "Vedi come le casse ti fanno risparmiare rispetto alle scatole di cartone",
      totalSavingsTitle: "Il tuo risparmio totale con le casse",
      totalSavingsTenYear: "Risparmio totale in 10 anni",
      savePerWeek: "Risparmio per settimana",
      savePerMonth: "Risparmio per mese",
      savePerYear: "Risparmio per anno",
      decrease: "Riduci {label}",
      increase: "Aumenta {label}"
    },
    pt: {
      documentTitle: "Calculadora de economia de caixas",
      titlePart1: "Calculadora",
      titlePart2: "de economia de caixas",
      tagline: "Calcule sua economia de embalagem com caixas plásticas duráveis em vez de caixas de papelão",
      previous: "Anterior",
      nextStep: "Próxima etapa",
      cta: "Obtenha sua cotação gratuita",
      alertMessage: "Entre em contato conosco através do nosso site para sua cotação gratuita!",
      stepIndicator1: "Seus custos atuais de embalagem",
      stepIndicator2: "Solução de caixas ECS",
      stepIndicator3: "Comparação de custos",
      step1Header: "Etapa 1: Seus custos atuais de embalagem",
      step1Desc: "Insira seus custos atuais de embalagem e frequência de entrega",
      pricePerBoxLabel: "Seu preço por caixa de papelão (180 ovos)",
      pricePerTrayLabel: "Seu preço por bandeja de papelão",
      boxesPerDeliveryLabel: "Caixas por entrega",
      deliveriesPerWeekLabel: "Entregas por semana",
      weeklyVolumeTitle: "Volume semanal",
      weeklyVolumeText: "Você envia {boxesPerWeek} caixas por semana ({boxesPerShipment} caixas × {shipmentsPerWeek} entregas)",
      weeklyCostTitle: "Custo de embalagem semanal",
      costBreakdown: "= {boxesPerWeek} {unitBoxes} × ( {currency}{pricePerBox} + 7 × {currency}{pricePerTray} )",
      unitBoxes: "caixas",
      unitCrates: "caixas",
      unitYears: "anos",
      step2Header: "Etapa 2: Solução de caixas plásticas duráveis",
      step2Desc: "Caixas sustentáveis que duram 10 anos e eliminam a necessidade de caixas de papelão e bandejas de papel",
      whyCratesTitle: "Por que são necessárias 3× caixas?",
      whyCratesText: "Você precisa de 3 conjuntos de caixas em rotação: 1 conjunto para limpeza, 1 conjunto no transporte de retorno e 1 conjunto para o envio atual. Isso garante operação contínua. Nesta nova configuração, assumimos que bandejas de ovos de plástico já estão sendo usadas.",
      crateRequirementsTitle: "Requisitos de caixas",
      cratesPerShipmentLabel: "Caixas por envio",
      rotationFactorLabel: "Fator de rotação",
      totalCratesNeededLabel: "Total de caixas necessárias",
      rotationHelp: "3 conjuntos necessários para ciclo de rotação",
      fixedPricingTitle: "Preço fixo",
      pricePerCrateLabel: "Preço por caixa",
      lifespanLabel: "Vida útil",
      totalInvestmentLabel: "Investimento total",
      oneTimeInvestmentHelp: "Investimento único",
      annualCostTitle: "Custo anual",
      investmentLabel: "Investimento",
      dividedByLabel: "Dividido por",
      costPerYearLabel: "Custo por ano",
      amortizedHelp: "Amortizado ao longo da vida útil",
      step3Header: "Etapa 3: Comparação de custos e economia",
      step3Desc: "Veja como as caixas economizam dinheiro em comparação com as caixas de papelão",
      totalSavingsTitle: "Sua economia total com caixas",
      totalSavingsTenYear: "Economia total em 10 anos",
      savePerWeek: "Economia por semana",
      savePerMonth: "Economia por mês",
      savePerYear: "Economia por ano",
      decrease: "Diminuir {label}",
      increase: "Aumentar {label}"
    },
    ru: {
      documentTitle: "Калькулятор экономии на ящиках",
      titlePart1: "Калькулятор",
      titlePart2: "экономии на ящиках",
      tagline: "Рассчитайте экономию на упаковке с прочными пластиковыми ящиками вместо картонных коробок",
      previous: "Назад",
      nextStep: "Следующий шаг",
      cta: "Получите бесплатное предложение",
      alertMessage: "Свяжитесь с нами через наш сайт, чтобы получить бесплатное предложение!",
      stepIndicator1: "Ваши текущие расходы на упаковку",
      stepIndicator2: "Решение с ящиками ECS",
      stepIndicator3: "Сравнение затрат",
      step1Header: "Шаг 1: Ваши текущие расходы на упаковку",
      step1Desc: "Введите текущие расходы на упаковку и частоту поставок",
      pricePerBoxLabel: "Ваша цена за картонную коробку (180 яиц)",
      pricePerTrayLabel: "Ваша цена за картонный лоток",
      boxesPerDeliveryLabel: "Коробок за поставку",
      deliveriesPerWeekLabel: "Поставок в неделю",
      weeklyVolumeTitle: "Недельный объем",
      weeklyVolumeText: "Вы отправляете {boxesPerWeek} коробок в неделю ({boxesPerShipment} коробок × {shipmentsPerWeek} поставок)",
      weeklyCostTitle: "Недельные расходы на упаковку",
      costBreakdown: "= {boxesPerWeek} {unitBoxes} × ( {currency}{pricePerBox} + 7 × {currency}{pricePerTray} )",
      unitBoxes: "коробок",
      unitCrates: "ящиков",
      unitYears: "лет",
      step2Header: "Шаг 2: Решение с прочными пластиковыми ящиками",
      step2Desc: "Экологичные ящики, которые служат 10 лет и устраняют необходимость в картонных коробках и бумажных лотках",
      whyCratesTitle: "Почему нужны 3× ящика?",
      whyCratesText: "Необходимо 3 комплекта ящиков в ротации: 1 комплект для очистки, 1 комплект в обратной перевозке и 1 комплект для текущей отправки. Это обеспечивает непрерывную работу. В этой новой системе предполагается, что пластиковые лотки для яиц уже используются.",
      crateRequirementsTitle: "Требования к ящикам",
      cratesPerShipmentLabel: "Ящиков на отправку",
      rotationFactorLabel: "Коэффициент ротации",
      totalCratesNeededLabel: "Всего необходимых ящиков",
      rotationHelp: "Требуется 3 комплекта для цикла ротации",
      fixedPricingTitle: "Фиксированная цена",
      pricePerCrateLabel: "Цена за ящик",
      lifespanLabel: "Срок службы",
      totalInvestmentLabel: "Общие инвестиции",
      oneTimeInvestmentHelp: "Единовременное вложение",
      annualCostTitle: "Годовые расходы",
      investmentLabel: "Инвестиции",
      dividedByLabel: "Делится на",
      costPerYearLabel: "Стоимость в год",
      amortizedHelp: "Амортизируется за срок службы",
      step3Header: "Шаг 3: Сравнение затрат и экономия",
      step3Desc: "Посмотрите, как ящики экономят деньги по сравнению с картонными коробками",
      totalSavingsTitle: "Ваша общая экономия с ящиками",
      totalSavingsTenYear: "Общая экономия за 10 лет",
      savePerWeek: "Экономия в неделю",
      savePerMonth: "Экономия в месяц",
      savePerYear: "Экономия в год",
      decrease: "Уменьшить {label}",
      increase: "Увеличить {label}"
    },
    zh: {
      documentTitle: "塑料周转箱节省计算器",
      titlePart1: "塑料周转箱",
      titlePart2: "节省计算器",
      tagline: "使用耐用塑料周转箱替代纸箱，计算您的包装节省",
      previous: "上一页",
      nextStep: "下一步",
      cta: "获取免费报价",
      alertMessage: "通过我们的网站联系我们获取免费报价！",
      stepIndicator1: "您当前的包装成本",
      stepIndicator2: "ECS周转箱方案",
      stepIndicator3: "成本比较",
      step1Header: "步骤1：您当前的包装成本",
      step1Desc: "输入您当前的包装成本和交付频率",
      pricePerBoxLabel: "每个纸箱价格（180枚鸡蛋）",
      pricePerTrayLabel: "每个纸托价格",
      boxesPerDeliveryLabel: "每次交付的箱数",
      deliveriesPerWeekLabel: "每周交付次数",
      weeklyVolumeTitle: "每周量",
      weeklyVolumeText: "您每周运送{boxesPerWeek}箱（{boxesPerShipment}箱 × {shipmentsPerWeek}次交付）",
      weeklyCostTitle: "每周包装成本",
      costBreakdown: "= {boxesPerWeek} {unitBoxes} × ( {currency}{pricePerBox} + 7 × {currency}{pricePerTray} )",
      unitBoxes: "箱",
      unitCrates: "箱",
      unitYears: "年",
      step2Header: "步骤2：耐用塑料周转箱方案",
      step2Desc: "耐用的周转箱可使用10年，避免使用纸箱和纸托",
      whyCratesTitle: "为何需要3×周转箱？",
      whyCratesText: "需要3套周转箱轮换：1套用于清洗，1套在返程运输中，1套用于当前装运。这样可确保持续运转。在此新方案中，我们假设已经使用塑料蛋托。",
      crateRequirementsTitle: "周转箱需求",
      cratesPerShipmentLabel: "每次装运的周转箱",
      rotationFactorLabel: "轮换系数",
      totalCratesNeededLabel: "所需周转箱总数",
      rotationHelp: "轮换周期需要3套",
      fixedPricingTitle: "固定价格",
      pricePerCrateLabel: "每个周转箱价格",
      lifespanLabel: "使用寿命",
      totalInvestmentLabel: "总投资",
      oneTimeInvestmentHelp: "一次性投资",
      annualCostTitle: "年度成本",
      investmentLabel: "投资",
      dividedByLabel: "除以",
      costPerYearLabel: "每年成本",
      amortizedHelp: "按使用寿命摊销",
      step3Header: "步骤3：成本比较与节省",
      step3Desc: "看看周转箱如何比纸箱为您节省成本",
      totalSavingsTitle: "使用周转箱的总节省",
      totalSavingsTenYear: "10年总节省",
      savePerWeek: "每周节省",
      savePerMonth: "每月节省",
      savePerYear: "每年节省",
      decrease: "减少{label}",
      increase: "增加{label}"
    },
    ar: {
      documentTitle: "حاسبة توفير الصناديق",
      titlePart1: "حاسبة",
      titlePart2: "توفير الصناديق",
      tagline: "احسب وفورات التعبئة باستخدام صناديق بلاستيكية متينة بدلاً من الصناديق الكرتونية",
      previous: "السابق",
      nextStep: "الخطوة التالية",
      cta: "احصل على عرض مجاني",
      alertMessage: "تواصل معنا عبر موقعنا للحصول على عرضك المجاني!",
      stepIndicator1: "تكاليف التعبئة الحالية الخاصة بك",
      stepIndicator2: "حل صناديق ECS",
      stepIndicator3: "مقارنة التكاليف",
      step1Header: "الخطوة 1: تكاليف التعبئة الحالية الخاصة بك",
      step1Desc: "أدخل تكاليف التعبئة الحالية وتكرار التسليم",
      pricePerBoxLabel: "سعر الصندوق الكرتوني (180 بيضة)",
      pricePerTrayLabel: "سعر الصينية الكرتونية",
      boxesPerDeliveryLabel: "عدد الصناديق لكل تسليم",
      deliveriesPerWeekLabel: "عمليات التسليم في الأسبوع",
      weeklyVolumeTitle: "الحجم الأسبوعي",
      weeklyVolumeText: "ترسل {boxesPerWeek} صندوقًا في الأسبوع ({boxesPerShipment} صندوقًا × {shipmentsPerWeek} عملية تسليم)",
      weeklyCostTitle: "تكلفة التعبئة الأسبوعية",
      costBreakdown: "= {boxesPerWeek} {unitBoxes} × ( {currency}{pricePerBox} + 7 × {currency}{pricePerTray} )",
      unitBoxes: "صناديق",
      unitCrates: "صناديق",
      unitYears: "سنوات",
      step2Header: "الخطوة 2: حل الصناديق البلاستيكية المتينة",
      step2Desc: "صناديق مستدامة تدوم 10 سنوات وتلغي الحاجة إلى الصناديق الكرتونية والصواني الورقية",
      whyCratesTitle: "لماذا نحتاج 3× صناديق؟",
      whyCratesText: "تحتاج إلى 3 مجموعات من الصناديق في دورة: مجموعة للتنظيف، ومجموعة في النقل العكسي، ومجموعة للشحنة الحالية. هذا يضمن التشغيل المستمر. في هذا النظام الجديد نفترض استخدام صواني بلاستيكية للبيض بالفعل.",
      crateRequirementsTitle: "متطلبات الصناديق",
      cratesPerShipmentLabel: "صناديق لكل شحنة",
      rotationFactorLabel: "عامل الدوران",
      totalCratesNeededLabel: "إجمالي الصناديق المطلوبة",
      rotationHelp: "مطلوب 3 مجموعات لدورة الدوران",
      fixedPricingTitle: "تسعير ثابت",
      pricePerCrateLabel: "سعر الصندوق",
      lifespanLabel: "مدة الخدمة",
      totalInvestmentLabel: "الاستثمار الكلي",
      oneTimeInvestmentHelp: "استثمار لمرة واحدة",
      annualCostTitle: "التكلفة السنوية",
      investmentLabel: "الاستثمار",
      dividedByLabel: "مقسوم على",
      costPerYearLabel: "التكلفة السنوية",
      amortizedHelp: "مستهلكة على مدة الخدمة",
      step3Header: "الخطوة 3: مقارنة التكاليف والتوفير",
      step3Desc: "شاهد كيف توفر الصناديق المال مقارنة بالصناديق الكرتونية",
      totalSavingsTitle: "إجمالي التوفير مع الصناديق",
      totalSavingsTenYear: "إجمالي التوفير خلال 10 سنوات",
      savePerWeek: "التوفير لكل أسبوع",
      savePerMonth: "التوفير لكل شهر",
      savePerYear: "التوفير لكل سنة",
      decrease: "خفض {label}",
      increase: "زيادة {label}"
    }
  };

  function t(key, params={}){
    const dict = translations[pageLang] || translations.en;
    let str = dict[key] || translations.en[key] || key;
    Object.keys(params).forEach(k=>{ str = str.replace(`{${k}}`, params[k]); });
    return str;
  }

  if(pageLang === 'ar') document.body.dir = 'rtl';

  // Currency based on browser language
  const userLocale = navigator.language || 'en';
  const currency = userLocale.startsWith('en')
    ? { symbol:'$', icon:'DollarSign', locale:userLocale }
    : { symbol:'€', icon:'Euro', locale:userLocale };

  // Apply static translations
  document.title = t('documentTitle');
  const tp1 = document.getElementById('title-part1'); if(tp1) tp1.textContent = t('titlePart1') + ' ';
  const tp2 = document.getElementById('title-part2'); if(tp2) tp2.textContent = t('titlePart2');
  const tg = document.getElementById('tagline'); if(tg) tg.textContent = t('tagline');
  const prevLbl = document.getElementById('prev-label'); if(prevLbl) prevLbl.textContent = t('previous');
  const nextLbl = document.getElementById('next-label'); if(nextLbl) nextLbl.textContent = t('nextStep');
  const ctaLbl = document.getElementById('cta-label'); if(ctaLbl) ctaLbl.textContent = t('cta');

  // --- State ---
  let currentStep = 0;
  
  // Step 1 inputs
  let pricePerBox = 0.9;           // Kosten per kartonnen doos
  let pricePerTray = 0.07;         // Kosten per kartonnen tray
  let boxesPerShipment = 250;       // Dozen per vracht
  let shipmentsPerWeek = 3;        // Aantal leveringen per week
  
  // Fixed values for Step 2
  const ecsCratePrice = 15;        // Vaste prijs per ECS krat
  const crateLifespan = 10;        // Kratten gaan 10 jaar mee
  
  let calculations = {};

  const steps = [
    { title:t('stepIndicator1'), icon:"Package" },
    { title:t('stepIndicator2'), icon:"Recycle" },
    { title:t('stepIndicator3'), icon:"Calculator" }
  ];

  // --- Utils ---
  function fmt(n){
    return new Intl.NumberFormat(currency.locale,{minimumFractionDigits:2,maximumFractionDigits:2}).format(n);
  }

  function calc(){
    // Huidige kosten berekeningen
    const perBoxCost = pricePerBox + (pricePerTray * 7); // 7 trays per box
    const weeklyCostCurrent = perBoxCost * boxesPerShipment * shipmentsPerWeek;
    const yearlyCostCurrent = weeklyCostCurrent * 52;
    const tenYearCostCurrent = yearlyCostCurrent * 10;
    
    // ECS kosten berekeningen
    const cratesNeeded = boxesPerShipment * 3; // 3 sets nodig (1 schoonmaak, 1 retour, 1 transport)
    const totalEcsInvestment = cratesNeeded * ecsCratePrice;
    const ecsAnnualCost = totalEcsInvestment / crateLifespan; // Afschrijving over 10 jaar
    const ecsTenYearCost = totalEcsInvestment; // Eenmalige investering
    
    // ECS weekly cost voor vergelijking
    const ecsWeeklyCost = ecsAnnualCost / 52;
    
    // Besparingen
    const savingsPerWeek = weeklyCostCurrent - ecsWeeklyCost;
    const savingsPerYear = yearlyCostCurrent - ecsAnnualCost;
    const savingsTenYears = tenYearCostCurrent - ecsTenYearCost;
    
    // Break-even
    const monthlySavings = savingsPerYear / 12;
    const breakEvenMonths = monthlySavings > 0 ? totalEcsInvestment / monthlySavings : 0;
    
    calculations = {
      // Current costs
      boxesPerWeek: boxesPerShipment * shipmentsPerWeek,
      perBoxCost,
      weeklyCostCurrent,
      yearlyCostCurrent,
      tenYearCostCurrent,
      
      // ECS costs
      cratesNeeded,
      totalEcsInvestment,
      ecsWeeklyCost,
      ecsAnnualCost,
      ecsTenYearCost,
      
      // Savings
      savingsPerWeek,
      savingsPerYear,
      savingsTenYears,
      monthlySavings,
      breakEvenMonths
    };
  }

  function icon(name, cls='w-5 h-5'){
    const p = {
      Package:'<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4"/>',
      Calculator:'<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z"/>',
      Recycle:'<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"/>',
      TrendingUp:'<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"/>',
      DollarSign:'<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 2v20"/><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 5H9a3 3 0 000 6h6a3 3 0 010 6H6"/>',
      Euro:'<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 10h12"/><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 14h9"/><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 6a7.7 7.7 0 0 0-5.2-2A7.9 7.9 0 0 0 6 12c0 4.4 3.5 8 7.8 8 2 0 3.8-.8 5.2-2"/>',
      Clock:'<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"/>',
      Target:'<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 100 4m0-4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 100 4m0-4v2m0-6V4"/>',
      CheckCircle:'<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>',
      BarChart3:'<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"/>',
      Truck:'<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 16V6a1 1 0 00-1-1H4a1 1 0 00-1 1v10a1 1 0 001 1h1m8-1a1 1 0 01-1 1H9m4-1V8a1 1 0 011-1h2.586a1 1 0 01.707.293l3.414 3.414a1 1 0 01.293.707V16a1 1 0 01-1 1h-1m-6-1a1 1 0 001 1h1M5 17a2 2 0 104 0m-4 0a2 2 0 114 0m6 0a2 2 0 104 0m-4 0a2 2 0 114 0"/>',
      Minus:'<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 12h14"/>',
      Plus:'<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 5v14"/><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 12h14"/>',
      Wallet:'<path stroke-linejoin="round" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 7V4a1 1 0 0 0-1-1H5a2 2 0 0 0 0 4h15a1 1 0 0 1 1 1v4h-3a2 2 0 0 0 0 4h3a1 1 0 0 0 1-1v-2a1 1 0 0 0-1-1"/><path d="M3 5v14a2 2 0 0 0 2 2h15a1 1 0 0 0 1-1v-4"/>'
    };
    return `<svg class="${cls}" fill="none" stroke="currentColor" viewBox="0 0 24 24">${p[name]||''}</svg>`;
}

  // Number input
  function numberInput(id, value, label, suffix='', step=0.01, min=0, max=999999){
    return `
      <div class="space-y-2">
        <label class="block text-sm font-medium text-gray-700">${label}</label>
        <div class="number-input-container" data-container-for="${id}">
          <button type="button" class="number-input-btn" data-dec="${id}" aria-label="${t('decrease',{label})}">
            ${icon('Minus')}
          </button>
          <div class="number-input-field-wrapper">
            <input type="number" id="${id}" class="number-input-field"
              value="${value.toFixed(step<1?2:0)}" step="${step}" min="${min}" max="${max}"
              inputmode="decimal" aria-live="polite" data-suffix="${suffix}">
            ${suffix ? `<span class="number-input-suffix" data-suffix-for="${id}">${suffix}</span>` : ''}
          </div>
          <button type="button" class="number-input-btn" data-inc="${id}" aria-label="${t('increase',{label})}">
            ${icon('Plus')}
          </button>
        </div>
      </div>
    `;
  }

  // Micro-anim helpers
  function addOnce(el, cls){ 
    if(!el) return; 
    el.classList.remove(cls); 
    void el.offsetWidth; 
    el.classList.add(cls); 
    el.addEventListener('animationend',()=>el.classList.remove(cls),{once:true}); 
  }
  
  function spawnDeltaTag(wrapper, text, neg=false){
    if(!wrapper) return;
    const tag = document.createElement('span');
    tag.className = 'delta-tag' + (neg?' negative':'');
    tag.textContent = text;
    wrapper.appendChild(tag);
    tag.addEventListener('animationend',()=>tag.remove(),{once:true});
  }
  
  function animateChange(id, direction, hitLimit=false, deltaText=''){
    const input = root.querySelector('#'+CSS.escape(id));
    const container = root.querySelector(`.number-input-container[data-container-for="${id}"]`);
    const suffix = root.querySelector(`.number-input-suffix[data-suffix-for="${id}"]`);
    if(!input || !container) return;
    
    addOnce(input,'value-bump'); 
    addOnce(container,'container-glow'); 
    if(suffix) addOnce(suffix,'suffix-pop');
    
    if(deltaText){ 
      const wrap = input.closest('.number-input-field-wrapper'); 
      spawnDeltaTag(wrap, deltaText, direction==='down'); 
    }
    
    if(hitLimit){
      addOnce(container,'shake');
      const btn = container.querySelector(direction==='up'?'.number-input-btn:last-child':'.number-input-btn:first-child');
      if(btn) addOnce(btn,'btn-warn');
    }
  }

  function animateCurrency(id, end, duration=1200){
    const el = root.querySelector('#'+CSS.escape(id));
    if(!el) return;
    const startTime = performance.now();
    function frame(now){
      const progress = Math.min((now - startTime)/duration,1);
      const value = end * progress;
      el.textContent = currency.symbol + fmt(value);
      if(progress < 1) requestAnimationFrame(frame);
    }
    requestAnimationFrame(frame);
  }

  // Update helpers
  function setValue(id, val, {animateStep=false}={}){
    const v = parseFloat(val)||0;
    switch(id){
      case 'pricePerBox': pricePerBox = v; break;
      case 'pricePerTray': pricePerTray = v; break;
      case 'boxesPerShipment': boxesPerShipment = Math.round(v); break;
      case 'shipmentsPerWeek': shipmentsPerWeek = Math.round(v); break;
    }
    calc();
    renderStep({animate: animateStep});
  }
  
  function inc(id, step, max, suffix=''){
    const input = root.querySelector('#'+CSS.escape(id)); 
    if(!input) return;
    const cur = parseFloat(input.value)||0;
    if(cur >= max){ 
      animateChange(id,'up',true); 
      return; 
    }
    const next = Math.min(max, cur + step);
    input.value = step < 1 ? next.toFixed(2) : Math.round(next);
    setValue(id, input.value, {animateStep:false});
    animateChange(id,'up',false, `+${step.toFixed(step<1?2:0)}${suffix?(' '+suffix):''}`);
  }
  
  function dec(id, step, min, suffix=''){
    const input = root.querySelector('#'+CSS.escape(id)); 
    if(!input) return;
    const cur = parseFloat(input.value)||0;
    if(cur <= min){ 
      animateChange(id,'down',true); 
      return; 
    }
    const next = Math.max(min, cur - step);
    input.value = step < 1 ? next.toFixed(2) : Math.round(next);
    setValue(id, input.value, {animateStep:false});
    animateChange(id,'down',false, `-${step.toFixed(step<1?2:0)}${suffix?(' '+suffix):''}`);
  }

  // Step indicator
  function renderIndicator(){
    const el = $('#ecs-stepIndicator');
    let html = '';
    steps.forEach((s,i)=>{
      const isCompleted = i < currentStep;
      const isActive = i === currentStep;
      html += `
        <div class="flex items-center">
          <div class="flex items-center justify-center w-10 h-10 rounded-full border-2 transition-all duration-300 ${
            isCompleted || isActive ? 'bg-blue-600 border-blue-600 text-white' : 'bg-gray-300 border-gray-300 text-blue-900'
          }">
            ${isCompleted ? icon('CheckCircle','w-5 h-5') : `<span class="text-sm font-semibold">${i+1}</span>`}
          </div>
          ${i<steps.length-1?`<div class="w-12 h-0.5 mx-2 transition-all duration-300 ${i<currentStep?'bg-blue-600':'bg-gray-300'}"></div>`:''}
        </div>
      `;
    });
    el.innerHTML = html;
  }

  // Render step
  function renderStep({animate=true}={}){
    calc();
    const c = $('#ecs-stepContent');
    let html = '';
    const wrapClass = `step-content-wrapper ${animate ? 'step-enter' : ''}`;

    switch(currentStep){
      case 0:
        // STEP 1: Input kosten en aantallen
        html = `
          <div class="${wrapClass}">
            <div class="step-header-section">
              <div class="inline-flex items-center justify-center w-16 h-16 rounded-full mb-4 icon-bg-blue">${icon('Package','w-8 h-8')}</div>
              <h2 class="text-2xl font-bold mb-2">${t('step1Header')}</h2>
              <p class="text-gray-600">${t('step1Desc')}</p>
            </div>
            <div class="step-inputs-section">
              <div class="grid grid-cols-2 gap-6">
                ${numberInput('pricePerBox', pricePerBox, t('pricePerBoxLabel'), currency.symbol, 0.01)}
                ${numberInput('pricePerTray', pricePerTray, t('pricePerTrayLabel'), currency.symbol, 0.01)}
                ${numberInput('boxesPerShipment', boxesPerShipment, t('boxesPerDeliveryLabel'), '', 50, 50)}
                ${numberInput('shipmentsPerWeek', shipmentsPerWeek, t('deliveriesPerWeekLabel'), '', 1, 1)}
              </div>
            </div>
            <div class="step-info-section">
              <div class="info-box blue">
                <div class="info-box-header">${icon('Calculator','w-5 h-5')}<span class="font-medium">${t('weeklyVolumeTitle')}</span></div>
                <p class="info-box-text">${t('weeklyVolumeText',{boxesPerWeek:calculations.boxesPerWeek,boxesPerShipment,shipmentsPerWeek})}</p>
              </div>
              <div class="info-box gray">
                <div class="cost-display-section">
                  <div class="cost-display-left">${icon('Wallet','w-5 h-5')}<span class="font-medium">${t('weeklyCostTitle')}</span></div>
                  <span class="cost-display-amount">${currency.symbol}${fmt(calculations.weeklyCostCurrent)}</span>
                </div>
                <p class="cost-breakdown">${t('costBreakdown',{boxesPerWeek:calculations.boxesPerWeek,unitBoxes:t('unitBoxes'),currency:currency.symbol,pricePerBox:fmt(pricePerBox),pricePerTray:fmt(pricePerTray)})}</p>
              </div>
            </div>
          </div>
        `;
        break;

      case 1:
        // STEP 2: ECS oplossing
        html = `
          <div class="${wrapClass}">
            <div class="step-header-section">
              <div class="inline-flex items-center justify-center w-16 h-16 rounded-full mb-4 icon-bg-green">${icon('Recycle','w-8 h-8')}</div>
              <h2 class="text-2xl font-bold mb-2">${t('step2Header')}</h2>
              <p class="text-gray-600">${t('step2Desc')}</p>
            </div>

            <div class="step-info-section">
              <div class="info-box blue">
                <div class="info-box-header">${icon('Recycle','w-5 h-5')}<span class="font-medium">${t('whyCratesTitle')}</span></div>
                <p class="info-box-text">${t('whyCratesText')}</p>
              </div>

              <div class="grid grid-cols-3 gap-6">
                <div class="card green">
                  <div class="card-header"><div class="title">${icon('CheckCircle','w-5 h-5')}<span>${t('crateRequirementsTitle')}</span></div></div>
                  <div class="kpi"><span class="label">${t('cratesPerShipmentLabel')}</span><span class="value">${boxesPerShipment} ${t('unitCrates')}</span></div>
                  <div class="kpi"><span class="label">${t('rotationFactorLabel')}</span><span class="value">× 3</span></div>
                  <div class="kpi"><span class="label">${t('totalCratesNeededLabel')}</span><span class="value">${calculations.cratesNeeded} ${t('unitCrates')}</span></div>
                  <div class="help">${t('rotationHelp')}</div>
                </div>

                <div class="card blue">
                  <div class="card-header"><div class="title">${icon('Target','w-5 h-5')}<span>${t('fixedPricingTitle')}</span></div></div>
                  <div class="kpi"><span class="label">${t('pricePerCrateLabel')}</span><span class="value">${currency.symbol}${ecsCratePrice}</span></div>
                  <div class="kpi"><span class="label">${t('lifespanLabel')}</span><span class="value">${crateLifespan} ${t('unitYears')}</span></div>
                  <div class="kpi"><span class="label">${t('totalInvestmentLabel')}</span><span class="value">${currency.symbol}${fmt(calculations.totalEcsInvestment)}</span></div>
                  <div class="help">${t('oneTimeInvestmentHelp')}</div>
                </div>

                <div class="card gray">
                  <div class="card-header"><div class="title">${icon('Calculator','w-5 h-5')}<span>${t('annualCostTitle')}</span></div></div>
                  <div class="kpi"><span class="label">${t('investmentLabel')}</span><span class="value">${currency.symbol}${fmt(calculations.totalEcsInvestment)}</span></div>
                  <div class="kpi"><span class="label">${t('dividedByLabel')}</span><span class="value">${crateLifespan} ${t('unitYears')}</span></div>
                  <div class="kpi"><span class="label">${t('costPerYearLabel')}</span><span class="value">${currency.symbol}${fmt(calculations.ecsAnnualCost)}</span></div>
                  <div class="help">${t('amortizedHelp')}</div>
                </div>
              </div>
            </div>
          </div>
        `;
        break;

      case 2:
        // STEP 3: Complete redesign met werkende styling
        const breakEvenPercentage = Math.min(100, (12 / calculations.breakEvenMonths) * 100);
        const savingsPercentage = calculations.yearlyCostCurrent > 0 ? (calculations.savingsPerYear / calculations.yearlyCostCurrent) * 100 : 0;

        html = `
          <div class="${wrapClass}">
            <div class="step-header-section">
              <div class="inline-flex items-center justify-center w-16 h-16 rounded-full mb-4 icon-bg-orange">
                ${icon('Calculator','w-8 h-8')}
              </div>
              <h2 class="text-2xl font-bold mb-2">${t('step3Header')}</h2>
              <p class="text-gray-600">${t('step3Desc')}</p>
            </div>

            <div class="step-info-section">

              <!-- Total Savings Summary -->
              <div class="savings-summary">
                <div class="savings-summary-header">
                  ${icon(currency.icon,'w-6 h-6')}
                  <span class="savings-summary-title">${t('totalSavingsTitle')}</span>
                </div>
                <div class="savings-summary-footer">
                  <p>${t('totalSavingsTenYear')}</p>
                  <p id="ecs-totalSavings">${currency.symbol}0.00</p>
                </div>
                <div class="savings-metrics">
                  <div class="savings-metric">
                    <p class="savings-metric-label">${t('savePerWeek')}</p>
                    <p class="savings-metric-value">${currency.symbol}${fmt(calculations.savingsPerWeek)}</p>
                  </div>
                  <div class="savings-metric">
                    <p class="savings-metric-label">${t('savePerMonth')}</p>
                    <p class="savings-metric-value">${currency.symbol}${fmt(calculations.monthlySavings)}</p>
                  </div>
                  <div class="savings-metric">
                    <p class="savings-metric-label">${t('savePerYear')}</p>
                    <p class="savings-metric-value">${currency.symbol}${fmt(calculations.savingsPerYear)}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        `;
        break;
    }

    c.innerHTML = html;

    if(currentStep === 2){
      animateCurrency('ecs-totalSavings', calculations.savingsTenYears);
    }

    // Bind events voor +/- knoppen
    c.querySelectorAll('[data-inc]').forEach(btn=>{
      btn.addEventListener('click', ()=>{
        const id = btn.getAttribute('data-inc');
        const input = root.querySelector('#'+CSS.escape(id));
        const step = parseFloat(input.step)||0.01;
        const max = parseFloat(input.max)||999999;
        const suffix = input.dataset.suffix||'';
        inc(id, step, max, suffix);
      });
    });
    
    c.querySelectorAll('[data-dec]').forEach(btn=>{
      btn.addEventListener('click', ()=>{
        const id = btn.getAttribute('data-dec');
        const input = root.querySelector('#'+CSS.escape(id));
        const step = parseFloat(input.step)||0.01;
        const min = parseFloat(input.min)||0;
        const suffix = input.dataset.suffix||'';
        dec(id, step, min, suffix);
      });
    });
    
    c.querySelectorAll('.number-input-field').forEach(inp=>{
      inp.addEventListener('input', ()=>{
        const container = inp.closest('.number-input-container');
        addOnce(container,'container-glow');
        clearTimeout(inp._deb);
        inp._deb = setTimeout(()=> addOnce(inp,'value-bump'), 300);
      });
      inp.addEventListener('change', ()=> setValue(inp.id, inp.value, {animateStep:false}));
    });
  }

  function renderIndicatorAndNav(){
  renderIndicator();
  const prevBtn = $('#ecs-prevBtn');
  const nextBtn = $('#ecs-nextBtn');
  const ctaBtn = $('#ecs-cta');
    
    prevBtn.disabled = currentStep === 0;
    
    // Show/hide buttons based on current step
    if(currentStep === 2) {
      nextBtn.style.display = 'none';
      ctaBtn.style.display = 'inline-flex';
    } else {
      nextBtn.style.display = 'inline-flex';
      ctaBtn.style.display = 'none';
    }
  }

  function scrollToCalcTop(){
    root.scrollIntoView({ behavior:'smooth', block:'start' });
  }

  // Navigation
  function next(){ if(currentStep<2){ currentStep++; renderIndicatorAndNav(); renderStep({animate:true}); scrollToCalcTop(); } }
  function prev(){ if(currentStep>0){ currentStep--; renderIndicatorAndNav(); renderStep({animate:true}); scrollToCalcTop(); } }

  // Init
  function init(){
    calc();
    renderIndicatorAndNav();
    renderStep({animate:true});
    $('#ecs-nextBtn').addEventListener('click', next);
    $('#ecs-prevBtn').addEventListener('click', prev);
    $('#ecs-cta').addEventListener('click', ()=> alert(t('alertMessage')));
  }
  init();

  // Optional
  window.ECSCalc = { next, prev };
})();
