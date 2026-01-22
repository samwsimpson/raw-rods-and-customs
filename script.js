// RAW RODS & CUSTOMS - BUSINESS PLAN CHARTS
// Chart.js Configuration

// Wait for DOM to load
document.addEventListener('DOMContentLoaded', function() {
    
    // Chart.js default configuration
    Chart.defaults.color = '#c0c0c0';
    Chart.defaults.borderColor = '#404040';
    Chart.defaults.font.family = "'Oswald', sans-serif";
    Chart.defaults.font.size = 14;

    // ========================================
    // COST BREAKDOWN CHART (PIE)
    // ========================================
    const costCtx = document.getElementById('costBreakdownChart');
    if (costCtx) {
        new Chart(costCtx, {
            type: 'doughnut',
            data: {
                labels: [
                    'Factory Five Kit ($21,000)',
                    'Turnkey Pallet ($11,500)',
                    'Wheels/Tires/Interior ($4,500)',
                    'Misc Components ($2,500)',
                    'Labor 120hrs ($6,000)'
                ],
                datasets: [{
                    data: [21000, 11500, 4500, 2500, 6000],
                    backgroundColor: [
                        '#c41e3a',
                        '#ff4500',
                        '#ffd700',
                        '#c0c0c0',
                        '#404040'
                    ],
                    borderColor: '#1a1a1a',
                    borderWidth: 3
                }]
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                plugins: {
                    legend: {
                        position: 'right',
                        labels: {
                            padding: 15,
                            font: {
                                size: 13
                            }
                        }
                    },
                    title: {
                        display: true,
                        text: 'Build Cost Breakdown - Total: $45,500',
                        font: {
                            size: 18,
                            family: "'Bebas Neue', sans-serif"
                        },
                        color: '#c41e3a'
                    },
                    tooltip: {
                        callbacks: {
                            label: function(context) {
                                const label = context.label || '';
                                const value = context.parsed || 0;
                                const total = context.dataset.data.reduce((a, b) => a + b, 0);
                                const percentage = ((value / total) * 100).toFixed(1);
                                return `${label}: ${percentage}%`;
                            }
                        }
                    }
                }
            }
        });
    }

    // ========================================
    // REVENUE & PROFIT CHART (DUAL LINE/BAR)
    // ========================================
    const revenueCtx = document.getElementById('revenueChart');
    if (revenueCtx) {
        new Chart(revenueCtx, {
            type: 'bar',
            data: {
                labels: ['Year 1', 'Year 2', 'Year 3', 'Year 4', 'Year 5'],
                datasets: [
                    {
                        label: 'Revenue',
                        data: [187500, 500000, 975000, 1400000, 1950000],
                        backgroundColor: 'rgba(196, 30, 58, 0.6)',
                        borderColor: '#c41e3a',
                        borderWidth: 2,
                        yAxisID: 'y'
                    },
                    {
                        label: 'Net Profit',
                        data: [8500, 70000, 165000, 265000, 420000],
                        backgroundColor: 'rgba(255, 215, 0, 0.6)',
                        borderColor: '#ffd700',
                        borderWidth: 2,
                        yAxisID: 'y'
                    },
                    {
                        label: 'Profit Margin %',
                        data: [4.5, 14.0, 16.9, 18.9, 21.5],
                        type: 'line',
                        borderColor: '#32cd32',
                        backgroundColor: 'rgba(50, 205, 50, 0.1)',
                        borderWidth: 3,
                        pointRadius: 6,
                        pointHoverRadius: 8,
                        yAxisID: 'y1',
                        tension: 0.4
                    }
                ]
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                interaction: {
                    mode: 'index',
                    intersect: false
                },
                scales: {
                    y: {
                        type: 'linear',
                        display: true,
                        position: 'left',
                        ticks: {
                            callback: function(value) {
                                return '$' + (value / 1000).toFixed(0) + 'K';
                            },
                            color: '#c0c0c0'
                        },
                        grid: {
                            color: 'rgba(255, 255, 255, 0.05)'
                        }
                    },
                    y1: {
                        type: 'linear',
                        display: true,
                        position: 'right',
                        ticks: {
                            callback: function(value) {
                                return value.toFixed(1) + '%';
                            },
                            color: '#32cd32'
                        },
                        grid: {
                            drawOnChartArea: false
                        }
                    },
                    x: {
                        ticks: {
                            color: '#c0c0c0'
                        },
                        grid: {
                            color: 'rgba(255, 255, 255, 0.05)'
                        }
                    }
                },
                plugins: {
                    legend: {
                        labels: {
                            padding: 15,
                            usePointStyle: true
                        }
                    },
                    title: {
                        display: true,
                        text: '5-Year Revenue & Profit Projection',
                        font: {
                            size: 20,
                            family: "'Bebas Neue', sans-serif"
                        },
                        color: '#c41e3a'
                    },
                    tooltip: {
                        callbacks: {
                            label: function(context) {
                                let label = context.dataset.label || '';
                                if (label) {
                                    label += ': ';
                                }
                                if (context.dataset.yAxisID === 'y1') {
                                    label += context.parsed.y.toFixed(1) + '%';
                                } else {
                                    label += '$' + context.parsed.y.toLocaleString();
                                }
                                return label;
                            }
                        }
                    }
                }
            }
        });
    }

    // ========================================
    // UNITS PRODUCED CHART (BAR)
    // ========================================
    const unitsCtx = document.getElementById('unitsChart');
    if (unitsCtx) {
        new Chart(unitsCtx, {
            type: 'bar',
            data: {
                labels: ['Year 1', 'Year 2', 'Year 3', 'Year 4', 'Year 5'],
                datasets: [
                    {
                        label: 'Turnkey Builds',
                        data: [3, 8, 13, 18, 25],
                        backgroundColor: 'rgba(196, 30, 58, 0.7)',
                        borderColor: '#c41e3a',
                        borderWidth: 2
                    },
                    {
                        label: 'Rolling Chassis Service',
                        data: [0, 0, 2, 4, 5],
                        backgroundColor: 'rgba(255, 69, 0, 0.7)',
                        borderColor: '#ff4500',
                        borderWidth: 2
                    }
                ]
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                scales: {
                    x: {
                        stacked: true,
                        ticks: { color: '#c0c0c0' },
                        grid: { color: 'rgba(255, 255, 255, 0.05)' }
                    },
                    y: {
                        stacked: true,
                        beginAtZero: true,
                        ticks: {
                            stepSize: 5,
                            color: '#c0c0c0',
                            callback: function(value) {
                                return value + ' units';
                            }
                        },
                        grid: { color: 'rgba(255, 255, 255, 0.05)' }
                    }
                },
                plugins: {
                    legend: {
                        labels: {
                            padding: 15,
                            usePointStyle: true
                        }
                    },
                    title: {
                        display: true,
                        text: 'Annual Production Volume by Service Type',
                        font: {
                            size: 20,
                            family: "'Bebas Neue', sans-serif"
                        },
                        color: '#c41e3a'
                    },
                    tooltip: {
                        callbacks: {
                            label: function(context) {
                                return context.dataset.label + ': ' + context.parsed.y + ' units';
                            },
                            footer: function(tooltipItems) {
                                let total = 0;
                                tooltipItems.forEach(item => {
                                    total += item.parsed.y;
                                });
                                return 'Total: ' + total + ' units';
                            }
                        }
                    }
                }
            }
        });
    }

    // ========================================
    // CASH FLOW CHART (LINE)
    // ========================================
    const cashFlowCtx = document.getElementById('cashFlowChart');
    if (cashFlowCtx) {
        new Chart(cashFlowCtx, {
            type: 'line',
            data: {
                labels: [
                    'Jan Y1', 'Q2 Y1', 'Q3 Y1', 'Q4 Y1',
                    'Q1 Y2', 'Q2 Y2', 'Q3 Y2', 'Q4 Y2',
                    'Q1 Y3', 'Q2 Y3', 'Q3 Y3', 'Q4 Y3',
                    'Q1 Y4', 'Q2 Y4', 'Q3 Y4', 'Q4 Y4',
                    'Q1 Y5', 'Q2 Y5', 'Q3 Y5', 'Q4 Y5'
                ],
                datasets: [
                    {
                        label: 'Cumulative Cash Flow',
                        data: [
                            -95000, -85000, -60000, -35000,  // Year 1: Initial investment recovery
                            -20000, 10000, 35000, 55000,     // Year 2: Breaking even
                            90000, 120000, 155000, 190000,   // Year 3: Growth phase
                            240000, 285000, 335000, 385000,  // Year 4: Scaling
                            450000, 510000, 575000, 650000   // Year 5: Market leadership
                        ],
                        borderColor: '#ffd700',
                        backgroundColor: function(context) {
                            const chart = context.chart;
                            const {ctx, chartArea} = chart;
                            if (!chartArea) return null;
                            
                            const gradient = ctx.createLinearGradient(0, chartArea.bottom, 0, chartArea.top);
                            gradient.addColorStop(0, 'rgba(255, 215, 0, 0.1)');
                            gradient.addColorStop(0.5, 'rgba(255, 215, 0, 0.3)');
                            gradient.addColorStop(1, 'rgba(255, 215, 0, 0.5)');
                            return gradient;
                        },
                        borderWidth: 3,
                        fill: true,
                        tension: 0.4,
                        pointRadius: 4,
                        pointHoverRadius: 6
                    },
                    {
                        label: 'Break-Even Line',
                        data: Array(20).fill(0),
                        borderColor: '#32cd32',
                        borderWidth: 2,
                        borderDash: [10, 5],
                        pointRadius: 0,
                        fill: false
                    }
                ]
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                interaction: {
                    mode: 'index',
                    intersect: false
                },
                scales: {
                    y: {
                        ticks: {
                            callback: function(value) {
                                return '$' + (value / 1000).toFixed(0) + 'K';
                            },
                            color: '#c0c0c0'
                        },
                        grid: {
                            color: function(context) {
                                if (context.tick.value === 0) {
                                    return '#32cd32';
                                }
                                return 'rgba(255, 255, 255, 0.05)';
                            },
                            lineWidth: function(context) {
                                if (context.tick.value === 0) {
                                    return 2;
                                }
                                return 1;
                            }
                        }
                    },
                    x: {
                        ticks: {
                            color: '#c0c0c0',
                            maxRotation: 45,
                            minRotation: 45
                        },
                        grid: {
                            color: 'rgba(255, 255, 255, 0.05)'
                        }
                    }
                },
                plugins: {
                    legend: {
                        labels: {
                            padding: 15,
                            usePointStyle: true
                        }
                    },
                    title: {
                        display: true,
                        text: 'Cumulative Cash Flow - Path to Profitability',
                        font: {
                            size: 20,
                            family: "'Bebas Neue', sans-serif"
                        },
                        color: '#c41e3a'
                    },
                    tooltip: {
                        callbacks: {
                            label: function(context) {
                                if (context.dataset.label === 'Break-Even Line') {
                                    return null;
                                }
                                let label = context.dataset.label || '';
                                if (label) {
                                    label += ': ';
                                }
                                const value = context.parsed.y;
                                if (value >= 0) {
                                    label += '+$' + value.toLocaleString();
                                } else {
                                    label += '-$' + Math.abs(value).toLocaleString();
                                }
                                return label;
                            }
                        }
                    },
                    annotation: {
                        annotations: {
                            breakEvenPoint: {
                                type: 'point',
                                xValue: 5,
                                yValue: 0,
                                backgroundColor: '#32cd32',
                                radius: 8,
                                borderColor: '#fff',
                                borderWidth: 2
                            }
                        }
                    }
                }
            }
        });
    }

    // ========================================
    // SMOOTH SCROLL FOR NAVIGATION
    // ========================================
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });

    // ========================================
    // INTERSECTION OBSERVER FOR ANIMATIONS
    // ========================================
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);

    // Observe all cards for fade-in animation
    document.querySelectorAll('.card').forEach(card => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(30px)';
        card.style.transition = 'opacity 0.6s ease-out, transform 0.6s ease-out';
        observer.observe(card);
    });

    // ========================================
    // DYNAMIC STAT COUNTER ANIMATION
    // ========================================
    function animateValue(element, start, end, duration, prefix = '', suffix = '') {
        const range = end - start;
        const increment = range / (duration / 16);
        let current = start;
        
        const timer = setInterval(() => {
            current += increment;
            if ((increment > 0 && current >= end) || (increment < 0 && current <= end)) {
                current = end;
                clearInterval(timer);
            }
            
            if (suffix === 'K') {
                element.textContent = prefix + Math.floor(current) + suffix;
            } else {
                element.textContent = prefix + Math.floor(current).toLocaleString() + suffix;
            }
        }, 16);
    }

    // Animate hero stats when they come into view
    const heroStatsObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting && !entry.target.classList.contains('animated')) {
                entry.target.classList.add('animated');
                
                const statNumbers = entry.target.querySelectorAll('.stat-number');
                statNumbers.forEach(stat => {
                    const text = stat.textContent;
                    if (text.includes('$380K+')) {
                        animateValue(stat, 0, 380, 2000, '$', 'K+');
                    } else if (text === '30') {
                        animateValue(stat, 0, 30, 2000);
                    } else if (text.includes('$25K+')) {
                        animateValue(stat, 0, 25, 2000, '$', 'K+');
                    }
                });
            }
        });
    }, { threshold: 0.5 });

    const heroStats = document.querySelector('.hero-stats');
    if (heroStats) {
        heroStatsObserver.observe(heroStats);
    }

    // ========================================
    // CONSOLE BRANDING
    // ========================================
    console.log('%c🏁 RAW RODS & CUSTOMS', 'color: #c41e3a; font-size: 24px; font-weight: bold;');
    console.log('%cTexas-Built Performance. Turnkey Power. Your Vision.', 'color: #ffd700; font-size: 14px;');
    console.log('%cBusiness Plan Loaded Successfully', 'color: #32cd32; font-size: 12px;');
});