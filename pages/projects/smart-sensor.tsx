import {
  ActionBtn,
  BackLink,
  Badge,
  DownloadIcon,
  GithubIcon,
  Section,
  StatBubble,
  TechTag,
} from 'web/components/badges'
import {CustomLink} from 'web/components/links'
import {PageBase} from 'web/components/page-base'
import {SEO} from 'web/components/SEO'
import {C} from 'web/lib/colors'

// ── Module card ───────────────────────────────────────────────────────────────

function ModuleCard({
  icon,
  index,
  title,
  items,
}: {
  icon: string
  index: string
  title: string
  items: string[]
}) {
  return (
    <div
      style={{
        background: C.bgCard,
        border: `1px solid ${C.border}`,
        borderRadius: 14,
        padding: '1.4rem',
        display: 'flex',
        flexDirection: 'column',
        gap: '0.75rem',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      <span
        style={{
          position: 'absolute',
          top: '0.75rem',
          right: '1rem',
          fontFamily: "'DM Mono', monospace",
          fontSize: '1.6rem',
          fontWeight: 700,
          color: C.redA10,
          lineHeight: 1,
        }}
      >
        {index}
      </span>
      <div style={{display: 'flex', alignItems: 'center', gap: '0.6rem'}}>
        <span style={{fontSize: '1.25rem'}}>{icon}</span>
        <span style={{fontSize: '0.88rem', fontWeight: 600, color: C.text, paddingRight: '2rem'}}>
          {title}
        </span>
      </div>
      <div style={{display: 'flex', flexDirection: 'column', gap: '0.45rem'}}>
        {items.map((item) => (
          <div key={item} style={{display: 'flex', gap: '0.6rem', alignItems: 'flex-start'}}>
            <span style={{color: C.red, fontSize: '0.7rem', paddingTop: '0.18rem', flexShrink: 0}}>
              ▸
            </span>
            <span style={{fontSize: '0.78rem', color: C.textSec, lineHeight: 1.6}}>{item}</span>
          </div>
        ))}
      </div>
    </div>
  )
}

// ── Spec row ──────────────────────────────────────────────────────────────────

function SpecRow({label, value, note}: {label: string; value: string; note?: string}) {
  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'baseline',
        gap: '1rem',
        padding: '0.75rem 0',
        borderBottom: `1px solid ${C.border}`,
      }}
    >
      <span style={{fontSize: '0.8rem', color: C.textSec}}>{label}</span>
      <div style={{textAlign: 'right'}}>
        <span
          style={{
            fontFamily: "'DM Mono', monospace",
            fontSize: '0.82rem',
            fontWeight: 600,
            color: C.text,
          }}
        >
          {value}
        </span>
        {note && (
          <span
            style={{
              display: 'block',
              fontSize: '0.67rem',
              color: C.textTert,
              fontStyle: 'italic',
            }}
          >
            {note}
          </span>
        )}
      </div>
    </div>
  )
}

// ── Bird chip ─────────────────────────────────────────────────────────────────

function BirdChip({name, note}: {name: string; note: string}) {
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: '0.4rem',
        padding: '1rem 0.75rem',
        background: C.bgCard,
        border: `1px solid ${C.border}`,
        borderRadius: 12,
        textAlign: 'center',
      }}
    >
      <span style={{fontSize: '1.6rem'}}>🐦</span>
      <span style={{fontSize: '0.82rem', fontWeight: 600, color: C.text}}>{name}</span>
      <span style={{fontSize: '0.7rem', color: C.textTert, lineHeight: 1.4}}>{note}</span>
    </div>
  )
}

// ── Page ──────────────────────────────────────────────────────────────────────

export default function AudioSensorThesisPage() {
  return (
    <PageBase>
      <SEO
        title={'Design of an Ultra-Low-Power Energy-Harvesting Audio Sensor — Martin Braquet'}
        description={
          "Master's thesis at UCLouvain on an autonomous audio smart sensor for forest ecosystem monitoring via bird species detection, combining energy harvesting, an AFE, LoRaWAN, and KNN classification at 22.1 mW."
        }
      />

      <div style={{background: C.bg, color: C.text, overflowX: 'hidden'}}>
        <style>{`
          @keyframes fadeUp {
            from { opacity: 0; transform: translateY(20px); }
            to   { opacity: 1; transform: none; }
          }
        `}</style>

        {/* ── HERO ── */}
        <header
          style={{
            padding: '4rem 2.5rem 3.5rem',
            borderBottom: `1px solid ${C.border}`,
            position: 'relative',
            overflow: 'hidden',
          }}
        >
          <div
            style={{
              position: 'absolute',
              inset: 0,
              pointerEvents: 'none',
              background: `radial-gradient(ellipse 55% 70% at 100% 30%, ${C.redA07} 0%, transparent 65%), radial-gradient(ellipse 30% 40% at 0% 90%, rgba(196,154,114,0.07) 0%, transparent 55%)`,
            }}
          />
          <div
            style={{
              position: 'absolute',
              right: '2%',
              top: '50%',
              transform: 'translateY(-50%)',
              fontFamily: "'Playfair Display', serif",
              fontSize: 'clamp(8rem, 16vw, 18rem)',
              fontWeight: 700,
              color: C.redA045,
              lineHeight: 1,
              userSelect: 'none',
              pointerEvents: 'none',
            }}
          >
            A
          </div>

          <div style={{maxWidth: 1100, margin: '0 auto', position: 'relative', zIndex: 1}}>
            <BackLink />

            <div
              style={{
                display: 'flex',
                gap: '0.4rem',
                flexWrap: 'wrap',
                marginBottom: '1rem',
                animation: 'fadeUp 0.5s ease both',
              }}
            >
              <Badge kind="thesis">Master's Thesis</Badge>
              <Badge kind="project">Hardware</Badge>
              <Badge kind="project">ML / AI</Badge>
            </div>

            <h1
              style={{
                fontFamily: "'Playfair Display', serif",
                fontSize: 'clamp(2rem, 4.5vw, 3.5rem)',
                fontWeight: 700,
                color: C.text,
                lineHeight: 1.08,
                marginBottom: '0.9rem',
                maxWidth: 780,
                animation: 'fadeUp 0.55s 0.06s ease both',
              }}
            >
              Design of an <span style={{color: C.red}}>ultra-low-power energy-harvesting</span>{' '}
              audio sensor for ecosystem monitoring
            </h1>

            <p
              style={{
                fontSize: '0.78rem',
                color: C.textTert,
                fontStyle: 'italic',
                marginBottom: '1.25rem',
                animation: 'fadeUp 0.55s 0.1s ease both',
              }}
            >
              Master in Electromechanical Engineering · UCLouvain · Supervisor: Prof. David Bol ·
              June 2020
            </p>

            <p
              style={{
                fontSize: '0.95rem',
                color: C.textSec,
                lineHeight: 1.8,
                maxWidth: 680,
                marginBottom: '1.5rem',
                animation: 'fadeUp 0.55s 0.14s ease both',
              }}
            >
              A fully autonomous audio smart sensor designed to continuously monitor forest
              ecosystems through bird inventory. The device harvests solar energy into a
              supercapacitor, processes bird calls with an analog front-end and ultra-low-power
              microcontroller, and transmits species detections wirelessly via{' '}
              <CustomLink href="https://lora-alliance.org/">LoRaWAN</CustomLink> — with a{' '}
              <strong style={{color: C.text}}>15+ year lifetime</strong> and no battery replacement.
            </p>

            <div
              style={{
                display: 'flex',
                gap: '0.5rem',
                flexWrap: 'wrap',
                alignItems: 'center',
                marginBottom: '1.75rem',
                animation: 'fadeUp 0.55s 0.18s ease both',
              }}
            >
              {['C', 'MATLAB', 'LTspice', 'KiCad', 'LaTeX'].map((t) => (
                <TechTag key={t}>{t}</TechTag>
              ))}
              <StatBubble>94% classification precision</StatBubble>
            </div>

            <div
              style={{
                display: 'flex',
                gap: '0.6rem',
                flexWrap: 'wrap',
                animation: 'fadeUp 0.55s 0.22s ease both',
              }}
            >
              <ActionBtn
                href="https://ewdq9sshhf9cseit.public.blob.vercel-storage.com/projects/EPL-master-thesis-Martin-Braquet.pdf"
                primary
              >
                <DownloadIcon /> Thesis Document
              </ActionBtn>
              <ActionBtn href="https://ewdq9sshhf9cseit.public.blob.vercel-storage.com/projects/Presentation-master-thesis.pdf">
                <DownloadIcon /> Presentation
              </ActionBtn>
              <ActionBtn href="https://github.com/MartinBraquet/master-thesis-UCLouvain">
                <GithubIcon /> Code
              </ActionBtn>
            </div>
          </div>
        </header>

        {/* ── PHOTOS ── */}
        <div style={{borderBottom: `1px solid ${C.border}`}}>
          <div
            style={{
              maxWidth: 1100,
              margin: '0 auto',
              padding: '3rem 2.5rem',
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
              gap: '1.5rem',
            }}
          >
            {[
              {
                label: 'Final PCB with MCU & RF board',
                src: 'https://ewdq9sshhf9cseit.public.blob.vercel-storage.com/projects/real_PCB_with_MCU.png',
                alt: 'Photograph of the final sensor PCB with microcontroller and RF board attached',
                aspect: '3/2',
              },
              {
                label: 'System block diagram',
                src: 'https://ewdq9sshhf9cseit.public.blob.vercel-storage.com/projects/sensor_Bol_no_background.png',
                alt: 'Block diagram of the complete sensor system showing all five subsystems',
                aspect: '3/2',
              },
            ].map(({label, src, alt, aspect}) => (
              <div key={label}>
                <p
                  style={{
                    fontSize: '0.65rem',
                    fontWeight: 600,
                    letterSpacing: '0.1em',
                    textTransform: 'uppercase',
                    color: C.textTert,
                    marginBottom: '0.75rem',
                  }}
                >
                  {label}
                </p>
                <div
                  style={{
                    borderRadius: 14,
                    overflow: 'hidden',
                    border: `1px solid ${C.border}`,
                    background: C.bgCard,
                  }}
                >
                  <img
                    src={src}
                    alt={alt}
                    style={{
                      width: '100%',
                      display: 'block',
                      objectFit: 'contain',
                      aspectRatio: aspect,
                    }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* ── STATS BAR ── */}
        <div style={{background: C.bgCard, borderBottom: `1px solid ${C.border}`}}>
          <div style={{maxWidth: 1100, margin: '0 auto', display: 'flex', flexWrap: 'wrap'}}>
            {[
              {n: '22.1 mW', label: 'Average power budget', sub: 'Harvesting = Consumption'},
              {n: '2.5 V', label: 'Optimised supply voltage', sub: 'Balances all subsystems'},
              {n: '15+', label: 'Years lifetime', sub: 'Supercapacitor-based storage'},
              {n: '94%', label: 'KNN classifier precision', sub: '4 Belgian bird species'},
            ].map(({n, label, sub}, i, arr) => (
              <div
                key={label}
                style={{
                  flex: '1 1 160px',
                  padding: '1.25rem 1.75rem',
                  borderRight: i < arr.length - 1 ? `1px solid ${C.border}` : 'none',
                }}
              >
                <span
                  style={{
                    fontFamily: "'DM Mono', monospace",
                    fontSize: '1.5rem',
                    fontWeight: 500,
                    color: C.text,
                    display: 'block',
                  }}
                >
                  {n}
                </span>
                <span style={{fontSize: '0.75rem', color: C.textSec, display: 'block'}}>
                  {label}
                </span>
                <span style={{fontSize: '0.68rem', color: C.textTert, display: 'block'}}>
                  {sub}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* ── MOTIVATION ── */}
        <Section
          label="Context"
          title="Autonomous forest monitoring through sound"
          intro="The Internet of Things promises trillions of connected sensors, but today's battery-powered devices are neither sustainable nor maintenance-free. Meanwhile, forest monitoring — critical in the face of climate change — still relies on infrequent manual sampling. This thesis tackles both challenges at once: a fully energy-autonomous sensor that never needs a battery swap and continuously inventories bird activity as a proxy for ecosystem health."
        >
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
              gap: '1.1rem',
            }}
          >
            {[
              {
                icon: '🌿',
                title: 'Ecosystem degradation',
                body: 'Rising climate change and deforestation demand continuous, dense sensing of forest health. Manual surveys sample data less than once a day — insufficient for meaningful ecological analysis.',
              },
              {
                icon: '♻️',
                title: 'Sustainable IoT',
                body: 'Replacing billions of batteries every two years is not environmentally viable. This sensor uses a supercapacitor with no toxic materials and harvests its own energy from ambient light.',
              },
              {
                icon: '🐦',
                title: 'Bird inventory as a proxy',
                body: 'Bird species richness and activity are well-established indicators of ecosystem health. Automating their detection with embedded ML enables real-time, continuous monitoring at scale.',
              },
            ].map(({icon, title, body}) => (
              <div
                key={title}
                style={{
                  background: C.bgCard,
                  border: `1px solid ${C.border}`,
                  borderRadius: 14,
                  padding: '1.4rem',
                }}
              >
                <div style={{fontSize: '1.4rem', marginBottom: '0.6rem'}}>{icon}</div>
                <h3
                  style={{
                    fontSize: '0.88rem',
                    fontWeight: 600,
                    color: C.text,
                    marginBottom: '0.4rem',
                  }}
                >
                  {title}
                </h3>
                <p style={{fontSize: '0.8rem', color: C.textSec, lineHeight: 1.65, margin: 0}}>
                  {body}
                </p>
              </div>
            ))}
          </div>
        </Section>

        {/* ── SYSTEM MODULES ── */}
        <Section
          label="Architecture"
          title="Five-module sensor design"
          intro="The sensor is decomposed into five interdependent subsystems. The overall supply voltage (2.5 V) was chosen through a multivariate optimisation that simultaneously satisfies the constraints of each module."
        >
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(290px, 1fr))',
              gap: '1.1rem',
            }}
          >
            <ModuleCard
              icon="⚡"
              index="01"
              title="Energy storage"
              items={[
                'Electrostatic double-layer supercapacitor chosen for its 15+ year lifetime and absence of toxic materials (no lead, no lithium).',
                'Sized against seasonal sun-illuminance data to guarantee continuous operation through the worst winter days.',
                'Voltage carefully monitored in real time to gate LoRaWAN transmissions only when sufficient energy is available.',
              ]}
            />
            <ModuleCard
              icon="🔋"
              index="02"
              title="Power management"
              items={[
                'e-peas AEM10941 PMU (Belgian low-power specialists) mediates power flow between solar cells, supercapacitor, and load.',
                'Configurable LDO regulators and Maximum Power Point Tracking maximise solar cell efficiency across illuminance levels.',
                'System supply voltage of 2.5 V selected as the multivariate optimum across all subsystems.',
              ]}
            />
            <ModuleCard
              icon="🎙️"
              index="03"
              title="Sensing & analog front-end"
              items={[
                'Electret condenser microphone selected after a thorough state-of-the-art comparison: small footprint, 16 dBSPL sensitivity, low noise (14.22 dBSPL input-referred).',
                'Custom AFE amplifies the full bird-emission range (20 Hz – 20 kHz) with a power vs. noise trade-off driving op-amp selection.',
                'LTspice AC and noise simulations validated against bench measurements.',
              ]}
            />
            <ModuleCard
              icon="💻"
              index="04"
              title="Data processing"
              items={[
                'STM32 ultra-low-power microcontroller alternates run/sleep at a one-third duty cycle, minimising average current draw.',
                'Weighted-average frequency of received audio fed into a k-nearest neighbours (KNN) classifier running on the bare-metal embedded system.',
                'Sensor non-ideality models integrated into the inference pipeline to recover accuracy lost when deploying offline-trained models on real hardware.',
              ]}
            />
            <ModuleCard
              icon="📡"
              index="05"
              title="Wireless communication"
              items={[
                'LoRaWAN LPWAN protocol chosen for its kilometre-range, ultra-low-power radio transmissions.',
                'Sensor transmits daily bird-species counts and detection frequencies to an edge-computing gateway at night.',
                'Over-the-air firmware updates supported: full update costs only 10.6 J, received in fragments when energy is sufficient.',
              ]}
            />
          </div>
        </Section>

        {/* ── CLASSIFICATION ── */}
        <Section
          label="Machine Learning"
          title="Embedded bird species classification"
          intro="A k-nearest neighbours classifier runs in real time on the STM32 microcontroller, discriminating between four common Belgian bird species using the weighted average frequency of detected songs as the feature vector."
        >
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(140px, 1fr))',
              gap: '1rem',
              marginBottom: '2rem',
            }}
          >
            <BirdChip name="Pigeon" note="Columba livia" />
            <BirdChip name="Blackbird" note="Turdus merula" />
            <BirdChip name="Great tit" note="Parus major" />
            <BirdChip name="Blue tit" note="Cyanistes caeruleus" />
          </div>

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
              gap: '1.25rem',
            }}
          >
            <div
              style={{
                background: C.bgCard,
                border: `1px solid ${C.border}`,
                borderRadius: 14,
                padding: '1.4rem',
              }}
            >
              <h3
                style={{
                  fontSize: '0.88rem',
                  fontWeight: 600,
                  color: C.text,
                  marginBottom: '0.9rem',
                }}
              >
                Algorithm pipeline
              </h3>
              {[
                {step: '1', text: 'Microphone captures audio during daylight hours (12+ h active)'},
                {step: '2', text: 'AFE filters and amplifies signal across 20 Hz – 20 kHz'},
                {
                  step: '3',
                  text: 'STM32 ADC digitises; weighted-average frequency computed per song segment',
                },
                {
                  step: '4',
                  text: 'KNN classifier matches feature vector against learned species database',
                },
                {
                  step: '5',
                  text: 'Species count and appearance frequency logged; sent via LoRaWAN at night',
                },
              ].map(({step, text}) => (
                <div
                  key={step}
                  style={{
                    display: 'flex',
                    gap: '0.85rem',
                    marginBottom: '0.65rem',
                    alignItems: 'flex-start',
                  }}
                >
                  <span
                    style={{
                      fontFamily: "'DM Mono', monospace",
                      fontSize: '0.65rem',
                      fontWeight: 600,
                      color: C.red,
                      background: C.redA08,
                      padding: '0.18rem 0.45rem',
                      borderRadius: 4,
                      flexShrink: 0,
                      marginTop: '0.05rem',
                    }}
                  >
                    {step}
                  </span>
                  <span style={{fontSize: '0.78rem', color: C.textSec, lineHeight: 1.6}}>
                    {text}
                  </span>
                </div>
              ))}
            </div>

            <div>
              <h3
                style={{
                  fontSize: '0.88rem',
                  fontWeight: 600,
                  color: C.text,
                  marginBottom: '0.9rem',
                }}
              >
                Performance
              </h3>
              <div style={{borderTop: `1px solid ${C.border}`}}>
                <SpecRow
                  label="Classifier"
                  value="k-Nearest Neighbours (KNN)"
                  note="Runs real-time on STM32"
                />
                <SpecRow
                  label="Precision (known database)"
                  value="94%"
                  note="Likelihood of correct species match"
                />
                <SpecRow
                  label="Precision (new recordings)"
                  value="~94%"
                  note="Generalises well to unseen songs"
                />
                <SpecRow
                  label="Species supported"
                  value="4"
                  note="Extensible with more training data"
                />
                <SpecRow
                  label="Active sensing window"
                  value="> 12 h / day"
                  note="Bird-active hours (daytime)"
                />
                <SpecRow
                  label="Communication window"
                  value="Night"
                  note="Conditional on supercap voltage"
                />
              </div>
            </div>
          </div>
          <div style={{display: 'flex', flexDirection: 'column', maxWidth: 600, marginTop: '20px'}}>
            <p
              style={{
                fontSize: '0.7rem',
                fontWeight: 600,
                color: C.textTert,
                textTransform: 'uppercase',
                marginBottom: '0.75rem',
              }}
            >
              Great Tit Song Spectrogram
            </p>
            <div
              style={{
                borderRadius: 14,
                overflow: 'hidden',
                border: `1px solid ${C.border}`,
                background: C.bgCard,
                flex: '1 1 auto',
                minHeight: 0,
              }}
            >
              <img
                src="https://raw.githubusercontent.com/MartinBraquet/master-thesis-UCLouvain/master/Thesis%20source%20code/img/Spectrogram.png"
                alt="Spectrogram"
                style={{width: '100%', height: '100%', display: 'block', objectFit: 'cover'}}
              />
            </div>
          </div>
        </Section>

        {/* ── ELECTRICAL SPECS ── */}
        <Section label="Electrical Design" title="Key specifications at a glance">
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
              gap: '2rem',
            }}
          >
            <div>
              <p
                style={{
                  fontSize: '0.65rem',
                  fontWeight: 600,
                  letterSpacing: '0.1em',
                  textTransform: 'uppercase',
                  color: C.textTert,
                  marginBottom: '0.5rem',
                }}
              >
                Power & energy
              </p>
              <div style={{borderTop: `1px solid ${C.border}`}}>
                <SpecRow label="Supply voltage" value="2.5 V" note="Multivariate optimum" />
                <SpecRow label="Average power" value="22.1 mW" note="Harvesting = Consumption" />
                <SpecRow label="MCU duty cycle" value="1/3" note="Run / sleep alternation" />
                <SpecRow
                  label="OTA firmware update"
                  value="10.6 J"
                  note="Full update energy cost"
                />
                <SpecRow
                  label="Energy source"
                  value="Photovoltaic cells"
                  note="Miniaturised, sized for seasons"
                />
                <SpecRow
                  label="Storage"
                  value="Supercapacitor (EDLC)"
                  note="15+ yr · no toxic materials"
                />
              </div>
            </div>
            <div>
              <p
                style={{
                  fontSize: '0.65rem',
                  fontWeight: 600,
                  letterSpacing: '0.1em',
                  textTransform: 'uppercase',
                  color: C.textTert,
                  marginBottom: '0.5rem',
                }}
              >
                Sensing & communication
              </p>
              <div style={{borderTop: `1px solid ${C.border}`}}>
                <SpecRow
                  label="Microphone type"
                  value="Electret condenser"
                  note="Small, low-noise, low-power"
                />
                <SpecRow label="Sensitivity" value="16 dBSPL" note="Minimum detectable sound" />
                <SpecRow
                  label="Input-referred noise"
                  value="14.22 dBSPL"
                  note="AFE + microphone combined"
                />
                <SpecRow
                  label="Audio bandwidth"
                  value="20 Hz – 20 kHz"
                  note="Full bird-emission range"
                />
                <SpecRow
                  label="Wireless protocol"
                  value="LoRaWAN (LPWAN)"
                  note="LoRa transceiver for IoT"
                />
                <SpecRow label="System lifetime" value="15+ years" note="No maintenance required" />
              </div>
            </div>
          </div>
        </Section>

        {/* ── REPOSITORY ── */}
        <Section label="Repository" title="Source files & simulations" noBorder>
          <p
            style={{
              fontSize: '0.88rem',
              color: C.textSec,
              lineHeight: 1.75,
              maxWidth: 700,
              marginBottom: '1.75rem',
            }}
          >
            The GitHub repository contains all simulation and design files produced during the
            thesis, organised by subsystem.
          </p>
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
              gap: '0.9rem',
              marginBottom: '2.5rem',
            }}
          >
            {[
              {
                name: 'Audio processing',
                body: 'C firmware for the STM32 microcontroller; MATLAB scripts to process and plot data received from the board.',
              },
              {
                name: 'Microphone & AFE',
                body: 'LTspice schematics and MATLAB post-processing for AC and noise simulations of the analog front-end.',
              },
              {
                name: 'PCB design',
                body: 'KiCad and Eagle files covering the full schematic and PCB layout for all boards.',
              },
              {
                name: 'Power management',
                body: 'MATLAB and Excel files for supercapacitor, solar cell, PMU, and luminosity measurements.',
              },
              {
                name: 'IV microphone curves',
                body: 'MATLAB code comparing current–voltage characteristics of candidate microphones.',
              },
              {
                name: 'Thesis source (LaTeX)',
                body: "Complete LaTeX source code of the Master's thesis document, including all figures and bibliography.",
              },
            ].map(({name, body}) => (
              <div
                key={name}
                style={{
                  background: C.bgCard,
                  border: `1px solid ${C.border}`,
                  borderRadius: 12,
                  padding: '1.1rem 1.2rem',
                }}
              >
                <span
                  style={{
                    fontFamily: "'Playfair Display', serif",
                    fontSize: '0.88rem',
                    fontWeight: 700,
                    color: C.text,
                    display: 'block',
                    marginBottom: '0.4rem',
                  }}
                >
                  {name}
                </span>
                <p style={{fontSize: '0.77rem', color: C.textSec, lineHeight: 1.6, margin: 0}}>
                  {body}
                </p>
              </div>
            ))}
          </div>

          <div style={{display: 'flex', gap: '0.6rem', flexWrap: 'wrap'}}>
            <ActionBtn
              href="https://ewdq9sshhf9cseit.public.blob.vercel-storage.com/projects/EPL-master-thesis-Martin-Braquet.pdf"
              primary
            >
              <DownloadIcon /> Thesis Document
            </ActionBtn>
            <ActionBtn href="https://ewdq9sshhf9cseit.public.blob.vercel-storage.com/projects/Presentation-master-thesis.pdf">
              <DownloadIcon /> Presentation Slides
            </ActionBtn>
            <ActionBtn href="https://github.com/MartinBraquet/master-thesis-UCLouvain">
              <GithubIcon /> GitHub Repository
            </ActionBtn>
          </div>
        </Section>
      </div>
    </PageBase>
  )
}
