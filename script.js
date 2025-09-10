(function(){
  const root = document.getElementById('ecs-calc');
  const $ = sel => root.querySelector(sel);

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
    { title:"Current Packaging Costs", icon:"Package" },
    { title:"ECS Crate Solution", icon:"Recycle" },
    { title:"Cost Comparison", icon:"Calculator" }
  ];

  // --- Utils ---
  function fmt(n){ return new Intl.NumberFormat('en-US',{minimumFractionDigits:2,maximumFractionDigits:2}).format(n); }

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
      DollarSign:'<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1"/>',
      Clock:'<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"/>',
      Target:'<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 100 4m0-4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 100 4m0-4v2m0-6V4"/>',
      CheckCircle:'<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>',
      BarChart3:'<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"/>',
      Truck:'<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 16V6a1 1 0 00-1-1H4a1 1 0 00-1 1v10a1 1 0 001 1h1m8-1a1 1 0 01-1 1H9m4-1V8a1 1 0 011-1h2.586a1 1 0 01.707.293l3.414 3.414a1 1 0 01.293.707V16a1 1 0 01-1 1h-1m-6-1a1 1 0 001 1h1M5 17a2 2 0 104 0m-4 0a2 2 0 114 0m6 0a2 2 0 104 0m-4 0a2 2 0 114 0"/>',
      Minus:'<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20 12H4"/>',
      Plus:'<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6"/>',
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
          <button type="button" class="number-input-btn" data-dec="${id}" aria-label="Verlaag ${label}">
            ${icon('Minus')}
          </button>
          <div class="number-input-field-wrapper">
            <input type="number" id="${id}" class="number-input-field"
              value="${value.toFixed(step<1?2:0)}" step="${step}" min="${min}" max="${max}"
              inputmode="decimal" aria-live="polite" data-suffix="${suffix}">
            ${suffix ? `<span class="number-input-suffix" data-suffix-for="${id}">${suffix}</span>` : ''}
          </div>
          <button type="button" class="number-input-btn" data-inc="${id}" aria-label="Verhoog ${label}">
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
              <div class="inline-flex items-center justify-center w-16 h-16 bg-blue-100 rounded-full mb-4" style="background:#dbeafe">${icon('Package','w-8 h-8 text-blue-600')}</div>
              <h2 class="text-2xl font-bold mb-2">Step 1: Current Packaging Costs</h2>
              <p class="text-gray-600">Enter your current packaging costs and delivery frequency</p>
            </div>
            <div class="step-inputs-section">
              <div class="grid grid-cols-2 gap-6">
                ${numberInput('pricePerBox', pricePerBox, 'Price per cardboard box (180 eggs)', '€', 0.01)}
                ${numberInput('pricePerTray', pricePerTray, 'Price per cardboard tray', '€', 0.01)}
                ${numberInput('boxesPerShipment', boxesPerShipment, 'Boxes per shipment', '', 50, 50)}
                ${numberInput('shipmentsPerWeek', shipmentsPerWeek, 'Shipments per week', '', 1, 1)}
              </div>
            </div>
            <div class="step-info-section">
              <div class="info-box blue">
                <div class="info-box-header">${icon('Calculator','w-5 h-5 text-blue-600')}<span class="font-medium">Weekly Volume</span></div>
                <p class="info-box-text">You ship ${calculations.boxesPerWeek} boxes per week (${boxesPerShipment} boxes × ${shipmentsPerWeek} shipments)</p>
              </div>
              <div class="info-box gray">
                <div class="cost-display-section">
                  <div class="cost-display-left">${icon('Wallet','w-5 h-5 text-blue-600')}<span class="font-medium">Weekly packaging cost</span></div>
                  <span class="cost-display-amount">€${fmt(calculations.weeklyCostCurrent)}</span>
                </div>
                <p class="cost-breakdown">= ${calculations.boxesPerWeek} boxes × ( €${fmt(pricePerBox)} + 7 × €${fmt(pricePerTray)} )</p>
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
              <div class="inline-flex items-center justify-center w-16 h-16 rounded-full mb-4" style="background:#dcfce7">${icon('Recycle','w-8 h-8 text-blue-600')}</div>
              <h2 class="text-2xl font-bold mb-2">Step 2: Crate Solution</h2>
              <p class="text-gray-600">Sustainable crates that last 10 years and eliminate the need for cardboard trays</p>
            </div>

            <div class="step-info-section">
              <div class="info-box blue">
                <div class="info-box-header">${icon('Recycle','w-5 h-5 text-blue-600')}<span class="font-medium">Why 3x crates needed?</span></div>
                <p class="info-box-text">You need 3 sets of crates in rotation: 1 set for cleaning, 1 set in return transport, and 1 set for current shipment. This ensures continuous operation.</p>
              </div>

              <div class="grid grid-cols-3 gap-6">
                <div class="card green">
                  <div class="card-header"><div class="title">${icon('CheckCircle','w-5 h-5')}<span>Crate Requirements</span></div></div>
                  <div class="kpi"><span class="label">Crates per shipment</span><span class="value">${boxesPerShipment} crates</span></div>
                  <div class="kpi"><span class="label">Rotation factor</span><span class="value">× 3</span></div>
                  <div class="kpi"><span class="label">Total crates needed</span><span class="value">${calculations.cratesNeeded} crates</span></div>
                  <div class="help">3 sets needed for rotation cycle</div>
                </div>

                <div class="card blue">
                  <div class="card-header"><div class="title">${icon('Target','w-5 h-5')}<span>Fixed Pricing</span></div></div>
                  <div class="kpi"><span class="label">Price per crate</span><span class="value">€${ecsCratePrice}</span></div>
                  <div class="kpi"><span class="label">Lifespan</span><span class="value">${crateLifespan} years</span></div>
                  <div class="kpi"><span class="label">Total investment</span><span class="value">€${fmt(calculations.totalEcsInvestment)}</span></div>
                  <div class="help">One-time investment</div>
                </div>

                <div class="card gray">
                  <div class="card-header"><div class="title">${icon('Calculator','w-5 h-5 text-blue-600')}<span>Annual Cost</span></div></div>
                  <div class="kpi"><span class="label">Investment</span><span class="value">€${fmt(calculations.totalEcsInvestment)}</span></div>
                  <div class="kpi"><span class="label">Divided by</span><span class="value">${crateLifespan} years</span></div>
                  <div class="kpi"><span class="label">Cost per year</span><span class="value">€${fmt(calculations.ecsAnnualCost)}</span></div>
                  <div class="help">Amortized over lifespan</div>
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
              <div class="inline-flex items-center justify-center w-16 h-16 rounded-full mb-4" style="background:#ffedd5">
                ${icon('Calculator','w-8 h-8 text-blue-600')}
              </div>
              <h2 class="text-2xl font-bold mb-2">Step 3: Cost Comparison & Savings</h2>
              <p class="text-gray-600">See how crates save you money compared to cardboard boxes</p>
            </div>
            
            <div class="step-info-section">
              
              <!-- Total Savings Summary -->
              <div style="background:linear-gradient(135deg,#f0fdf4 0%,#dcfce7 100%);border:0px;border-radius:1rem;padding:1.5rem;position:relative;overflow:hidden">
                <div style="display:flex;align-items:center;gap:.75rem;margin-bottom:1.25rem">
                  ${icon('DollarSign','w-6 h-6')}
                  <span style="font-size:1.25rem;font-weight:800;color:#14532d">Your Total Savings with crates</span>
                </div>
                <div style="display:grid;grid-template-columns:repeat(3,1fr);gap:1.5rem">
                  <div style="text-align:center;padding:1rem;background:rgba(255,255,255,.9);border-radius:.75rem">
                    <p style="font-size:.75rem;text-transform:uppercase;letter-spacing:.05em;color:#15803d;margin-bottom:.5rem;font-weight:600">Save per Week</p>
                    <p style="font-size:1.75rem;font-weight:900;color:#14532d;line-height:1">€${fmt(calculations.savingsPerWeek)}</p>
                  </div>
                  <div style="text-align:center;padding:1rem;background:rgba(255,255,255,.9);border-radius:.75rem">
                    <p style="font-size:.75rem;text-transform:uppercase;letter-spacing:.05em;color:#15803d;margin-bottom:.5rem;font-weight:600">Save per Year</p>
                    <p style="font-size:1.75rem;font-weight:900;color:#14532d;line-height:1">€${fmt(calculations.savingsPerYear)}</p>
                  </div>
                  <div style="text-align:center;padding:1rem;background:rgba(255,255,255,.9);border-radius:.75rem">
                    <p style="font-size:.75rem;text-transform:uppercase;letter-spacing:.05em;color:#15803d;margin-bottom:.5rem;font-weight:600">Save per Month</p>
                    <p style="font-size:1.75rem;font-weight:900;color:#14532d;line-height:1">€${fmt(calculations.monthlySavings)}</p>
                  </div>
                </div>
                <div style="text-align:center;margin-top:1.25rem;padding-top:1.25rem;border-top:2px solid rgba(134,239,172,.3)">
                  <p style="font-size:.875rem;color:#15803d;margin-bottom:.5rem">Total savings over 10 years</p>
                  <p style="font-size:2.5rem;font-weight:900;color:#14532d;line-height:1">€${fmt(calculations.savingsTenYears)}</p>
                </div>
              </div>
            </div>
          </div>
        `;
        break;
    }

    c.innerHTML = html;

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

  // Navigation
  function next(){ if(currentStep<2){ currentStep++; renderIndicatorAndNav(); renderStep({animate:true}); } }
  function prev(){ if(currentStep>0){ currentStep--; renderIndicatorAndNav(); renderStep({animate:true}); } }

  // Init
  function init(){
    calc();
    renderIndicatorAndNav();
    renderStep({animate:true});
    $('#ecs-nextBtn').addEventListener('click', next);
    $('#ecs-prevBtn').addEventListener('click', prev);
    $('#ecs-cta').addEventListener('click', ()=> alert('Contact us through our website for your free quote!'));
  }
  init();

  // Optional
  window.ECSCalc = { next, prev };
})();