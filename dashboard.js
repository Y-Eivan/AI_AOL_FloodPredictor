// ============================================
// DASHBOARD PAGE JAVASCRIPT
// ============================================

// Mockup flood data for Central Jakarta districts (Kelurahan/Kecamatan)
const jakartaCitiesData = {
    "Menteng": {
        name: "Menteng",
        riskLevel: "MEDIUM",
        riskColor: "risk-medium",
        emoji: "😐",
        rainfall: 52.3,
        waterLevel: 2.4,
        subsidence: 6.5,
        activeAlerts: 8,
        populationAtRisk: 15200,
        details: {
            monsoonIntensity: 72,
            climateChange: 68,
            coastalVulnerability: 55,
            temperature: 28,
            urbanization: 92,
            deforestation: 45,
            wetlandLoss: 380,
            populationDensity: 21500,
            drainageCapacity: 62,
            elevation: 12,
            slope: 2.8,
            soilPermeability: 52,
            riverHealth: 45,
            sedimentation: 75,
            agriculturalPractices: 40,
            forestEncroachment: 35,
            drainageEfficiency: 58,
            damCapacity: 78,
            infrastructureCondition: 68,
            pumpStation: 75,
            riverManagement: 55,
            disasterPreparedness: 72,
            earlyWarning: 82,
            communityAwareness: 78
        }
    },
    "Tanah Abang": {
        name: "Tanah Abang",
        riskLevel: "HIGH",
        riskColor: "risk-high",
        emoji: "😰",
        rainfall: 68.5,
        waterLevel: 3.5,
        subsidence: 8.8,
        activeAlerts: 15,
        populationAtRisk: 28500,
        details: {
            monsoonIntensity: 85,
            climateChange: 78,
            coastalVulnerability: 72,
            temperature: 29,
            urbanization: 96,
            deforestation: 52,
            wetlandLoss: 620,
            populationDensity: 24800,
            drainageCapacity: 45,
            elevation: 8,
            slope: 2.1,
            soilPermeability: 42,
            riverHealth: 38,
            sedimentation: 88,
            agriculturalPractices: 35,
            forestEncroachment: 42,
            drainageEfficiency: 42,
            damCapacity: 92,
            infrastructureCondition: 52,
            pumpStation: 68,
            riverManagement: 45,
            disasterPreparedness: 62,
            earlyWarning: 75,
            communityAwareness: 68
        }
    },
    "Gambir": {
        name: "Gambir",
        riskLevel: "MEDIUM",
        riskColor: "risk-medium",
        emoji: "😐",
        rainfall: 48.7,
        waterLevel: 2.6,
        subsidence: 7.2,
        activeAlerts: 10,
        populationAtRisk: 18200,
        details: {
            monsoonIntensity: 70,
            climateChange: 65,
            coastalVulnerability: 58,
            temperature: 28,
            urbanization: 94,
            deforestation: 48,
            wetlandLoss: 450,
            populationDensity: 19800,
            drainageCapacity: 55,
            elevation: 10,
            slope: 2.5,
            soilPermeability: 48,
            riverHealth: 42,
            sedimentation: 78,
            agriculturalPractices: 38,
            forestEncroachment: 40,
            drainageEfficiency: 52,
            damCapacity: 85,
            infrastructureCondition: 62,
            pumpStation: 72,
            riverManagement: 52,
            disasterPreparedness: 68,
            earlyWarning: 80,
            communityAwareness: 72
        }
    },
    "Kemayoran": {
        name: "Kemayoran",
        riskLevel: "HIGH",
        riskColor: "risk-high",
        emoji: "😰",
        rainfall: 62.8,
        waterLevel: 3.2,
        subsidence: 9.5,
        activeAlerts: 16,
        populationAtRisk: 32500,
        details: {
            monsoonIntensity: 82,
            climateChange: 75,
            coastalVulnerability: 68,
            temperature: 29,
            urbanization: 95,
            deforestation: 58,
            wetlandLoss: 720,
            populationDensity: 23200,
            drainageCapacity: 42,
            elevation: 7,
            slope: 1.9,
            soilPermeability: 38,
            riverHealth: 35,
            sedimentation: 90,
            agriculturalPractices: 42,
            forestEncroachment: 48,
            drainageEfficiency: 45,
            damCapacity: 88,
            infrastructureCondition: 48,
            pumpStation: 65,
            riverManagement: 42,
            disasterPreparedness: 58,
            earlyWarning: 72,
            communityAwareness: 65
        }
    },
    "Senen": {
        name: "Senen",
        riskLevel: "MEDIUM",
        riskColor: "risk-medium",
        emoji: "😐",
        rainfall: 55.2,
        waterLevel: 2.8,
        subsidence: 7.8,
        activeAlerts: 11,
        populationAtRisk: 21800,
        details: {
            monsoonIntensity: 75,
            climateChange: 70,
            coastalVulnerability: 62,
            temperature: 28,
            urbanization: 93,
            deforestation: 50,
            wetlandLoss: 520,
            populationDensity: 22100,
            drainageCapacity: 52,
            elevation: 9,
            slope: 2.3,
            soilPermeability: 45,
            riverHealth: 40,
            sedimentation: 82,
            agriculturalPractices: 40,
            forestEncroachment: 45,
            drainageEfficiency: 48,
            damCapacity: 82,
            infrastructureCondition: 58,
            pumpStation: 70,
            riverManagement: 48,
            disasterPreparedness: 65,
            earlyWarning: 78,
            communityAwareness: 70
        }
    },
    "Cempaka Putih": {
        name: "Cempaka Putih",
        riskLevel: "LOW",
        riskColor: "risk-low",
        emoji: "😊",
        rainfall: 38.5,
        waterLevel: 1.9,
        subsidence: 5.2,
        activeAlerts: 6,
        populationAtRisk: 12500,
        details: {
            monsoonIntensity: 62,
            climateChange: 58,
            coastalVulnerability: 48,
            temperature: 27,
            urbanization: 85,
            deforestation: 42,
            wetlandLoss: 280,
            populationDensity: 16500,
            drainageCapacity: 68,
            elevation: 14,
            slope: 3.2,
            soilPermeability: 58,
            riverHealth: 52,
            sedimentation: 65,
            agriculturalPractices: 55,
            forestEncroachment: 38,
            drainageEfficiency: 65,
            damCapacity: 72,
            infrastructureCondition: 72,
            pumpStation: 82,
            riverManagement: 62,
            disasterPreparedness: 75,
            earlyWarning: 85,
            communityAwareness: 80
        }
    },
    "Johar Baru": {
        name: "Johar Baru",
        riskLevel: "HIGH",
        riskColor: "risk-high",
        emoji: "😰",
        rainfall: 65.8,
        waterLevel: 3.4,
        subsidence: 8.5,
        activeAlerts: 14,
        populationAtRisk: 25800,
        details: {
            monsoonIntensity: 84,
            climateChange: 76,
            coastalVulnerability: 65,
            temperature: 29,
            urbanization: 94,
            deforestation: 55,
            wetlandLoss: 590,
            populationDensity: 22800,
            drainageCapacity: 48,
            elevation: 8,
            slope: 2.2,
            soilPermeability: 40,
            riverHealth: 36,
            sedimentation: 86,
            agriculturalPractices: 38,
            forestEncroachment: 46,
            drainageEfficiency: 46,
            damCapacity: 90,
            infrastructureCondition: 55,
            pumpStation: 68,
            riverManagement: 46,
            disasterPreparedness: 62,
            earlyWarning: 76,
            communityAwareness: 68
        }
    },
    "Sawah Besar": {
        name: "Sawah Besar",
        riskLevel: "CRITICAL",
        riskColor: "risk-critical",
        emoji: "😱",
        rainfall: 75.2,
        waterLevel: 4.1,
        subsidence: 10.2,
        activeAlerts: 20,
        populationAtRisk: 38500,
        details: {
            monsoonIntensity: 90,
            climateChange: 82,
            coastalVulnerability: 78,
            temperature: 30,
            urbanization: 97,
            deforestation: 62,
            wetlandLoss: 850,
            populationDensity: 26500,
            drainageCapacity: 38,
            elevation: 6,
            slope: 1.8,
            soilPermeability: 35,
            riverHealth: 32,
            sedimentation: 94,
            agriculturalPractices: 32,
            forestEncroachment: 52,
            drainageEfficiency: 38,
            damCapacity: 95,
            infrastructureCondition: 45,
            pumpStation: 62,
            riverManagement: 38,
            disasterPreparedness: 55,
            earlyWarning: 70,
            communityAwareness: 62
        }
    }
};

// Tab switching functionality
function switchTab(tabName) {
    // Hide all tab contents
    const contents = document.querySelectorAll('.tab-content');
    contents.forEach(content => content.classList.remove('active'));

    // Remove active class from all tabs
    const tabs = document.querySelectorAll('.tab');
    tabs.forEach(tab => tab.classList.remove('active'));

    // Show selected tab content
    const selectedContent = document.getElementById(tabName);
    if (selectedContent) {
        selectedContent.classList.add('active');
    }

    // Add active class to clicked tab
    const clickedTab = event.target;
    clickedTab.classList.add('active');
}

// Update last updated time
function updateTime() {
    const now = new Date();
    const seconds = Math.floor(Math.random() * 60);
    const updateElement = document.getElementById('lastUpdate');
    if (updateElement) {
        updateElement.textContent = `${seconds} seconds ago`;
    }
}

// Update dashboard with city data
function updateDashboard(cityData) {
    if (!cityData) return;

    // Update hero title and status icon
    const heroTitle = document.querySelector('.hero h1');
    const statusIcon = document.querySelector('.status-icon');
    const heroSection = document.querySelector('.hero');

    if (heroTitle) {
        heroTitle.textContent = cityData.name;
    }
    if (statusIcon) {
        statusIcon.textContent = cityData.emoji;
    }

    // Update hero section background color based on risk level
    if (heroSection) {
        heroSection.classList.remove('hero-low', 'hero-medium', 'hero-high', 'hero-critical');

        switch (cityData.riskColor) {
            case 'risk-low':
                heroSection.classList.add('hero-low');
                break;
            case 'risk-medium':
                heroSection.classList.add('hero-medium');
                break;
            case 'risk-high':
                heroSection.classList.add('hero-high');
                break;
            case 'risk-critical':
                heroSection.classList.add('hero-critical');
                break;
        }
    }

    // Update stat cards
    const statCards = document.querySelectorAll('.stat-card');

    // Risk Level Card
    if (statCards[0]) {
        statCards[0].className = `stat-card ${cityData.riskColor}`;
        statCards[0].querySelector('.stat-value').textContent = cityData.riskLevel;
    }

    // Rainfall Intensity
    if (statCards[1]) {
        statCards[1].querySelector('.stat-value').textContent = `${cityData.rainfall} mm/h`;
    }

    // Water Level
    if (statCards[2]) {
        statCards[2].querySelector('.stat-value').textContent = `${cityData.waterLevel} m`;
    }

    // Land Subsidence
    if (statCards[3]) {
        statCards[3].querySelector('.stat-value').textContent = `${cityData.subsidence} cm/yr`;
    }

    // Active Alerts
    if (statCards[4]) {
        statCards[4].querySelector('.stat-value').textContent = cityData.activeAlerts;
    }

    // Population at Risk
    if (statCards[5]) {
        statCards[5].querySelector('.stat-value').textContent = cityData.populationAtRisk.toLocaleString();
    }

    // Update detailed data
    updateDetailedData(cityData.details);

    // Re-animate progress bars
    setTimeout(animateProgressBars, 100);
}

// Update detailed data sections
function updateDetailedData(details) {
    if (!details) return;

    // Helper function to get status badge class
    function getStatusClass(value) {
        if (value >= 75) return 'danger';
        if (value >= 50) return 'warning';
        return 'good';
    }

    function getStatusText(value, inverse = false) {
        if (inverse) {
            if (value >= 75) return 'Good';
            if (value >= 50) return 'Moderate';
            return 'Poor';
        } else {
            if (value >= 75) return 'High';
            if (value >= 50) return 'Moderate';
            return 'Low';
        }
    }

    // Update Weather Condition tab
    updateDetailItem('weather', 0, details.monsoonIntensity, '%', getStatusText(details.monsoonIntensity));
    updateDetailItem('weather', 1, details.climateChange, '%', getStatusText(details.climateChange));
    updateDetailItem('weather', 2, details.coastalVulnerability, '%', getStatusText(details.coastalVulnerability));
    updateDetailItem('weather', 3, details.temperature, '°C', 'Normal', 'good');

    updateDetailItem('weather', 4, details.urbanization, '%', getStatusText(details.urbanization));
    updateDetailItem('weather', 5, details.deforestation, '%', getStatusText(details.deforestation));
    updateDetailItem('weather', 6, details.wetlandLoss, ' ha', getStatusText(details.wetlandLoss));
    updateDetailItem('weather', 7, details.populationDensity, '/km²', getStatusText(details.populationDensity));

    // Update Topography tab
    updateDetailItem('topography', 0, details.drainageCapacity, '%', getStatusText(100 - details.drainageCapacity));
    updateDetailItem('topography', 1, details.elevation, ' m ASL', details.elevation < 10 ? 'Very Low' : 'Normal');
    updateDetailItem('topography', 2, details.slope, '°', details.slope < 3 ? 'Flat' : 'Normal');
    updateDetailItem('topography', 3, details.soilPermeability, '%', getStatusText(100 - details.soilPermeability));

    updateDetailItem('topography', 4, details.riverHealth, '%', getStatusText(100 - details.riverHealth));
    updateDetailItem('topography', 5, details.sedimentation, '%', getStatusText(details.sedimentation));
    updateDetailItem('topography', 6, details.agriculturalPractices, '%', getStatusText(details.agriculturalPractices));
    updateDetailItem('topography', 7, details.forestEncroachment, '%', getStatusText(details.forestEncroachment));

    // Update Infrastructure tab
    updateDetailItem('infrastructure', 0, details.drainageEfficiency, '%', getStatusText(100 - details.drainageEfficiency));
    updateDetailItem('infrastructure', 1, details.damCapacity, '%', details.damCapacity > 85 ? 'Near Full' : 'Normal');
    updateDetailItem('infrastructure', 2, details.infrastructureCondition, '%', getStatusText(100 - details.infrastructureCondition));
    updateDetailItem('infrastructure', 3, details.pumpStation, '%', getStatusText(100 - details.pumpStation), 'good');

    updateDetailItem('infrastructure', 4, details.riverManagement, '%', getStatusText(100 - details.riverManagement));
    updateDetailItem('infrastructure', 5, details.disasterPreparedness, '%', getStatusText(100 - details.disasterPreeparedness));
    updateDetailItem('infrastructure', 6, details.earlyWarning, '%', getStatusText(100 - details.earlyWarning), 'good');
    updateDetailItem('infrastructure', 7, details.communityAwareness, '%', getStatusText(100 - details.communityAwareness), 'good');
}

// Update individual detail item
function updateDetailItem(tabId, itemIndex, value, unit, statusText, forceStatus = null) {
    const tab = document.getElementById(tabId);
    if (!tab) return;

    const items = tab.querySelectorAll('.detail-item');
    if (!items[itemIndex]) return;

    const item = items[itemIndex];
    const progressFill = item.querySelector('.progress-fill');
    const valueText = item.querySelector('.value-text');
    const badge = item.querySelector('.badge');

    if (progressFill) {
        progressFill.style.width = `${value}%`;

        // Update color class
        progressFill.classList.remove('good', 'warning', 'danger');
        if (forceStatus) {
            progressFill.classList.add(forceStatus);
        } else {
            if (value >= 75) progressFill.classList.add('danger');
            else if (value >= 50) progressFill.classList.add('warning');
            else progressFill.classList.add('good');
        }
    }

    if (valueText) {
        valueText.textContent = `${value}${unit}`;
    }

    if (badge) {
        badge.textContent = statusText;
        badge.classList.remove('badge-good', 'badge-warning', 'badge-danger');

        if (forceStatus) {
            badge.classList.add(`badge-${forceStatus}`);
        } else {
            if (value >= 75) badge.classList.add('badge-danger');
            else if (value >= 50) badge.classList.add('badge-warning');
            else badge.classList.add('badge-good');
        }
    }
}

// Search location functionality
function searchLocation(query) {
    if (!query || query.trim() === '') return;

    const searchQuery = query.trim().toLowerCase();

    // Search for matching district
    let foundCity = null;
    for (let cityKey in jakartaCitiesData) {
        const cityName = jakartaCitiesData[cityKey].name.toLowerCase();
        if (cityName.includes(searchQuery) || searchQuery.includes(cityKey.toLowerCase())) {
            foundCity = jakartaCitiesData[cityKey];
            break;
        }
    }

    if (foundCity) {
        updateDashboard(foundCity);
        highlightMapRegion(foundCity.name);

        // Show success message
        showNotification(`Showing data for ${foundCity.name}`, 'success');
    } else {
        // Show error message
        showNotification('District not found. Try: Menteng, Tanah Abang, Gambir, Kemayoran, Senen, Cempaka Putih, Johar Baru, or Sawah Besar', 'error');
    }
}

// Show notification
function showNotification(message, type = 'info') {
    // Remove existing notification
    const existing = document.querySelector('.notification');
    if (existing) existing.remove();

    const notification = document.createElement('div');
    notification.className = `notification notification-${type}`;
    notification.textContent = message;
    notification.style.cssText = `
        position: fixed;
        top: 80px;
        right: 20px;
        background: ${type === 'success' ? '#4CAF50' : type === 'error' ? '#F44336' : '#2196F3'};
        color: white;
        padding: 15px 25px;
        border-radius: 8px;
        box-shadow: 0 4px 12px rgba(0,0,0,0.3);
        z-index: 10000;
        animation: slideIn 0.3s ease;
    `;

    document.body.appendChild(notification);

    setTimeout(() => {
        notification.style.animation = 'slideOut 0.3s ease';
        setTimeout(() => notification.remove(), 300);
    }, 3000);
}

// Add animation styles
if (!document.querySelector('#notification-animations')) {
    const style = document.createElement('style');
    style.id = 'notification-animations';
    style.textContent = `
        @keyframes slideIn {
            from { transform: translateX(400px); opacity: 0; }
            to { transform: translateX(0); opacity: 1; }
        }
        @keyframes slideOut {
            from { transform: translateX(0); opacity: 1; }
            to { transform: translateX(400px); opacity: 0; }
        }
    `;
    document.head.appendChild(style);
}

// Highlight map region (visual feedback)
function highlightMapRegion(cityName) {
    console.log(`Highlighting region: ${cityName}`);
    // This would interact with the actual map
    // For now, just update the map placeholder text
    const mapPlaceholder = document.querySelector('.map-placeholder');
    if (mapPlaceholder) {
        const cityShort = cityName.split('(')[0].trim();
        mapPlaceholder.innerHTML = `
            <div style="text-align: center;">
                <div style="font-size: 24px; margin-bottom: 10px;">📍</div>
                <div style="font-size: 18px; font-weight: 600;">${cityShort}</div>
                <div style="font-size: 14px; color: #666; margin-top: 5px;">Click regions on map to view data</div>
            </div>
        `;
    }
}

// Initialize search
const searchBar = document.querySelector('.search-bar');
if (searchBar) {
    searchBar.addEventListener('keypress', function (e) {
        if (e.key === 'Enter') {
            searchLocation(this.value);
            this.value = ''; // Clear search
        }
    });

    // Add autocomplete suggestions for Central Jakarta districts
    const suggestions = ['Menteng', 'Tanah Abang', 'Gambir', 'Kemayoran', 'Senen', 'Cempaka Putih', 'Johar Baru', 'Sawah Besar'];
    searchBar.setAttribute('list', 'city-suggestions');
    searchBar.setAttribute('placeholder', '🔍 Search district in Central Jakarta...');

    const datalist = document.createElement('datalist');
    datalist.id = 'city-suggestions';
    suggestions.forEach(district => {
        const option = document.createElement('option');
        option.value = district;
        datalist.appendChild(option);
    });
    searchBar.parentNode.appendChild(datalist);
}

// Animate progress bars
function animateProgressBars() {
    const progressBars = document.querySelectorAll('.progress-fill');
    progressBars.forEach(bar => {
        const width = bar.style.width;
        bar.style.width = '0%';
        setTimeout(() => {
            bar.style.width = width;
        }, 100);
    });
}

// Setup interactive map
function setupMap() {
    const mapPlaceholder = document.querySelector('.map-placeholder');
    if (!mapPlaceholder) return;

    // Create SVG map of Central Jakarta districts
    mapPlaceholder.innerHTML = `
        <svg viewBox="0 0 600 400" style="width: 100%; height: 100%; cursor: pointer;">
            <!-- Title -->
            <text x="300" y="25" text-anchor="middle" fill="#333" font-size="16" font-weight="700">
                Central Jakarta Districts
            </text>
            
            <!-- Sawah Besar (Southwest) - CRITICAL (Red) -->
            <path id="sawah-besar" class="map-region" fill="#ff4444" stroke="#fff" stroke-width="2"
                  d="M 50,250 L 200,250 L 200,350 L 50,350 Z"
                  data-city="Sawah Besar">
            </path>
            <text x="125" y="295" text-anchor="middle" fill="#fff" font-size="12" font-weight="600" pointer-events="none">
                Sawah
            </text>
            <text x="125" y="310" text-anchor="middle" fill="#fff" font-size="12" font-weight="600" pointer-events="none">
                Besar
            </text>
            
            <!-- Gambir (West-Center) - MEDIUM (Yellow) -->
            <path id="gambir" class="map-region" fill="#ffc107" stroke="#fff" stroke-width="2"
                  d="M 200,200 L 300,200 L 300,300 L 200,300 Z"
                  data-city="Gambir">
            </path>
            <text x="250" y="255" text-anchor="middle" fill="#fff" font-size="13" font-weight="600" pointer-events="none">
                Gambir
            </text>
            
            <!-- Tanah Abang (South) - HIGH (Orange) -->
            <path id="tanah-abang" class="map-region" fill="#ff9800" stroke="#fff" stroke-width="2"
                  d="M 300,250 L 450,250 L 450,350 L 300,350 Z"
                  data-city="Tanah Abang">
            </path>
            <text x="375" y="295" text-anchor="middle" fill="#fff" font-size="12" font-weight="600" pointer-events="none">
                Tanah
            </text>
            <text x="375" y="310" text-anchor="middle" fill="#fff" font-size="12" font-weight="600" pointer-events="none">
                Abang
            </text>
            
            <!-- Menteng (Center) - MEDIUM (Yellow) -->
            <path id="menteng" class="map-region" fill="#ffc107" stroke="#fff" stroke-width="2"
                  d="M 220,130 L 380,130 L 380,200 L 300,200 L 300,250 L 220,250 Z"
                  data-city="Menteng">
            </path>
            <text x="300" y="175" text-anchor="middle" fill="#fff" font-size="14" font-weight="600" pointer-events="none">
                Menteng
            </text>
            
            <!-- Senen (East) - MEDIUM (Yellow) -->
            <path id="senen" class="map-region" fill="#ffc107" stroke="#fff" stroke-width="2"
                  d="M 450,200 L 550,200 L 550,300 L 450,300 Z"
                  data-city="Senen">
            </path>
            <text x="500" y="255" text-anchor="middle" fill="#fff" font-size="13" font-weight="600" pointer-events="none">
                Senen
            </text>
            
            <!-- Johar Baru (Northeast) - HIGH (Orange) -->
            <path id="johar-baru" class="map-region" fill="#ff9800" stroke="#fff" stroke-width="2"
                  d="M 450,100 L 550,100 L 550,200 L 450,200 Z"
                  data-city="Johar Baru">
            </path>
            <text x="500" y="145" text-anchor="middle" fill="#fff" font-size="12" font-weight="600" pointer-events="none">
                Johar
            </text>
            <text x="500" y="160" text-anchor="middle" fill="#fff" font-size="12" font-weight="600" pointer-events="none">
                Baru
            </text>
            
            <!-- Kemayoran (North) - HIGH (Orange) -->
            <path id="kemayoran" class="map-region" fill="#ff9800" stroke="#fff" stroke-width="2"
                  d="M 220,50 L 450,50 L 450,130 L 380,130 L 220,130 Z"
                  data-city="Kemayoran">
            </path>
            <text x="335" y="95" text-anchor="middle" fill="#fff" font-size="13" font-weight="600" pointer-events="none">
                Kemayoran
            </text>
            
            <!-- Cempaka Putih (Northwest) - LOW (Green) -->
            <path id="cempaka-putih" class="map-region" fill="#4caf50" stroke="#fff" stroke-width="2"
                  d="M 50,50 L 220,50 L 220,130 L 50,130 Z"
                  data-city="Cempaka Putih">
            </path>
            <text x="135" y="85" text-anchor="middle" fill="#fff" font-size="11" font-weight="600" pointer-events="none">
                Cempaka
            </text>
            <text x="135" y="100" text-anchor="middle" fill="#fff" font-size="11" font-weight="600" pointer-events="none">
                Putih
            </text>
            
            <!-- Legend -->
            <g transform="translate(20, 365)">
                <rect width="12" height="12" fill="#4caf50"/>
                <text x="17" y="10" font-size="11" fill="#333">Low Risk</text>
                
                <rect x="85" width="12" height="12" fill="#ffc107"/>
                <text x="102" y="10" font-size="11" fill="#333">Medium</text>
                
                <rect x="165" width="12" height="12" fill="#ff9800"/>
                <text x="182" y="10" font-size="11" fill="#333">High Risk</text>
                
                <rect x="250" width="12" height="12" fill="#ff4444"/>
                <text x="267" y="10" font-size="11" fill="#333">Critical</text>
            </g>
        </svg>
    `;

    // Add click handlers to map regions
    const regions = mapPlaceholder.querySelectorAll('.map-region');
    regions.forEach(region => {
        region.style.cursor = 'pointer';
        region.style.transition = 'all 0.3s ease';

        region.addEventListener('mouseenter', function () {
            this.style.opacity = '0.8';
            this.style.transform = 'scale(1.02)';
        });

        region.addEventListener('mouseleave', function () {
            this.style.opacity = '1';
            this.style.transform = 'scale(1)';
        });

        region.addEventListener('click', function () {
            const cityKey = this.getAttribute('data-city');
            const cityData = jakartaCitiesData[cityKey];
            if (cityData) {
                updateDashboard(cityData);
                showNotification(`Showing data for ${cityData.name}`, 'success');
            }
        });
    });
}

// Initialize dashboard
document.addEventListener('DOMContentLoaded', function () {
    console.log('Dashboard loaded successfully');

    // Set initial update time
    updateTime();

    // Setup the interactive map
    setupMap();

    // Load default district (Menteng)
    updateDashboard(jakartaCitiesData['Menteng']);

    // Animate progress bars on load
    setTimeout(animateProgressBars, 300);

    // Set up real-time updates every 30 seconds
    setInterval(() => {
        updateTime();
    }, 30000);
});

// Export functions for external use
window.switchTab = switchTab;
window.searchLocation = searchLocation;
window.jakartaCitiesData = jakartaCitiesData;