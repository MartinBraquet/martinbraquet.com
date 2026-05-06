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
import {PageBase} from 'web/components/page-base'
import {SEO} from 'web/components/SEO'
import {C} from 'web/lib/colors'

// ── Model result card ─────────────────────────────────────────────────────────

function Cell({val, best}: {val: number; best: number}) {
  return (
    <span
      style={{
        fontFamily: "'DM Mono', monospace",
        fontSize: '0.78rem',
        fontWeight: val === best ? 700 : 400,
        color: val === best ? 'rgb(16 105 79)' : C.textSec,
      }}
    >
      {val.toFixed(2)}
    </span>
  )
}

function ModelCard({
  name,
  errorFull,
  errorSelected,
  errorPCA,
  tier,
  note,
}: {
  name: string
  errorFull: number
  errorSelected: number
  errorPCA: number
  tier: 'top' | 'mid' | 'basic'
  note?: string
}) {
  const tierStyle = {
    top: {bg: C.redA08, color: C.red, border: C.redA18, label: 'Best'},
    mid: {bg: C.inkA07, color: C.textSec, border: C.border, label: 'Good'},
    basic: {bg: C.inkA04, color: C.textTert, border: C.border, label: 'Baseline'},
  }[tier]

  const best = Math.min(errorFull, errorSelected, errorPCA)

  return (
    <div
      style={{
        background: C.bgCard,
        border: `1px solid ${C.border}`,
        borderRadius: 14,
        padding: '1.25rem 1.4rem',
        display: 'flex',
        flexDirection: 'column',
        gap: '0.6rem',
      }}
    >
      <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start'}}>
        <span style={{fontSize: '0.85rem', fontWeight: 600, color: C.text}}>{name}</span>
        <span
          style={{
            fontSize: '0.6rem',
            fontWeight: 600,
            letterSpacing: '0.08em',
            textTransform: 'uppercase',
            padding: '0.2rem 0.55rem',
            borderRadius: 100,
            background: tierStyle.bg,
            color: tierStyle.color,
            border: `1px solid ${tierStyle.border}`,
            whiteSpace: 'nowrap',
            flexShrink: 0,
          }}
        >
          {tierStyle.label}
        </span>
      </div>

      <div
        style={{
          display: 'grid',
          gridTemplateColumns: '1fr 1fr 1fr',
          gap: '0.5rem',
          paddingTop: '0.25rem',
        }}
      >
        {[
          {label: 'Full', val: errorFull},
          {label: 'Selected', val: errorSelected},
          {label: 'PCA', val: errorPCA},
        ].map(({label, val}) => (
          <div key={label} style={{display: 'flex', flexDirection: 'column', gap: '0.15rem'}}>
            <span
              style={{
                fontSize: '0.62rem',
                color: C.textTert,
                textTransform: 'uppercase',
                letterSpacing: '0.06em',
              }}
            >
              {label}
            </span>
            <Cell val={val} best={best} />
          </div>
        ))}
      </div>

      {note && (
        <p
          style={{
            fontSize: '0.73rem',
            color: C.textTert,
            lineHeight: 1.55,
            fontStyle: 'italic',
            margin: 0,
          }}
        >
          {note}
        </p>
      )}
    </div>
  )
}

// ── Step card ─────────────────────────────────────────────────────────────────

function StepCard({step, title, body}: {step: string; title: string; body: string}) {
  return (
    <div
      style={{
        background: C.bgCard,
        border: `1px solid ${C.border}`,
        borderRadius: 14,
        padding: '1.25rem 1.4rem',
        display: 'flex',
        gap: '1rem',
        alignItems: 'flex-start',
      }}
    >
      <span
        style={{
          fontFamily: "'DM Mono', monospace",
          fontSize: '1.1rem',
          fontWeight: 600,
          color: C.red,
          lineHeight: 1,
          paddingTop: '0.15rem',
          flexShrink: 0,
        }}
      >
        {step}
      </span>
      <div>
        <h3 style={{fontSize: '0.85rem', fontWeight: 600, color: C.text, marginBottom: '0.3rem'}}>
          {title}
        </h3>
        <p style={{fontSize: '0.78rem', color: C.textSec, lineHeight: 1.6}}>{body}</p>
      </div>
    </div>
  )
}

// ── Page ──────────────────────────────────────────────────────────────────────

export default function BeijingAirQualityPage() {
  return (
    <PageBase>
      <SEO
        title={'Prediction of Air Quality in Beijing'}
        description={
          'Machine learning regression models to predict PM2.5 concentration in Beijing air — featuring feature engineering, selection, PCA, and seven trained models.'
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
              background: `radial-gradient(ellipse 55% 70% at 100% 30%, ${C.redA07} 0%, transparent 65%), radial-gradient(ellipse 30% 40% at 0% 90%, rgba(114,154,196,0.07) 0%, transparent 55%)`,
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
            B
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
              <Badge kind="project">ML / AI</Badge>
              <Badge kind="project">Project</Badge>
            </div>

            <h1
              style={{
                fontFamily: "'Playfair Display', serif",
                fontSize: 'clamp(2rem, 4.5vw, 3.5rem)',
                fontWeight: 700,
                color: C.text,
                lineHeight: 1.08,
                marginBottom: '0.9rem',
                maxWidth: 700,
                animation: 'fadeUp 0.55s 0.06s ease both',
              }}
            >
              Predicting <span style={{color: C.red}}>Air Quality</span> in Beijing
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
              Academic Project · UCLouvain LELEC2870 · December 2019
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
              Regression models trained on 7 684 records of meteorological and weather data from
              Beijing (2013–2017) to predict{' '}
              <strong style={{color: C.text}}>PM2.5 concentration</strong>. The project covers
              feature engineering, correlation and mutual-information selection, PCA extraction, and
              a benchmark of seven models evaluated with the Bootstrap 632 method.
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
              {['Python', 'PyTorch', 'Sklearn', 'Seaborn'].map((t) => (
                <TechTag key={t}>{t}</TechTag>
              ))}
              <StatBubble>31.42 µg/m³ best error</StatBubble>
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
                href="https://martinbraquet.com/wp-content/uploads/LELEC2870-Project_groupAM-1.pdf"
                primary
              >
                <DownloadIcon /> Full Report
              </ActionBtn>
              <ActionBtn href="https://github.com/MartinBraquet/machine-learning-ELEC2870">
                <GithubIcon /> Code
              </ActionBtn>
            </div>
          </div>
        </header>

        {/* ── IMAGES SPLIT ── */}
        <div style={{borderBottom: `1px solid ${C.border}`}}>
          <div
            style={{
              maxWidth: 1000,
              position: 'relative',
              margin: '0 auto',
              padding: '3rem 2.5rem',
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
              gap: '3rem',
            }}
          >
            {[
              // {
              //   label: 'Model error summary',
              //   src: 'https://martinbraquet.com/wp-content/uploads/Error_Summary.png',
              //   alt: 'Bar chart comparing bootstrap 632 errors across all models and feature sets',
              // },
              {
                label: 'MLP error vs neurons per layer',
                src: 'https://martinbraquet.com/wp-content/uploads/Error_neurons.png',
                alt: 'Line chart of MLP error against number of neurons per hidden layer',
              },
              {
                label: 'Mutual information matrix',
                src: 'https://martinbraquet.com/wp-content/uploads/Mutual_Information.png',
                alt: 'Heatmap of mutual information between all input features and the PM2.5 output',
              },
            ].map(({label, src, alt}) => (
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
                  <img src={src} alt={alt} style={{width: '100%', display: 'block'}} />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* ── STATS BAR ── */}
        <div style={{background: C.bgCard, borderBottom: `1px solid ${C.border}`}}>
          <div style={{maxWidth: 1100, margin: '0 auto', display: 'flex', flexWrap: 'wrap'}}>
            {[
              {n: '7 684', label: 'Training records', sub: 'March 2013 – Feb 2017'},
              {n: '17', label: 'Engineered features', sub: 'After cyclic encoding'},
              {n: '7', label: 'Models benchmarked', sub: 'Linear to deep neural nets'},
              {n: '31.42', label: 'Best error (µg/m³)', sub: 'Bagging trees, selected features'},
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

        {/* ── METHODOLOGY ── */}
        <Section label="Methodology" title="Five-stage ML pipeline">
          <p
            style={{
              fontSize: '0.88rem',
              color: C.textSec,
              lineHeight: 1.75,
              maxWidth: 700,
              marginBottom: '1.75rem',
            }}
          >
            The project follows a rigorous end-to-end pipeline from raw sensor data to validated
            model selection, emphasising sound error estimation throughout.
          </p>
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
              gap: '0.9rem',
            }}
          >
            <StepCard
              step="01"
              title="Feature engineering"
              body="Time encoded cyclically via sin/cos (daily and yearly periods). Wind direction mapped to a wind-rose angle. All 17 features normalized with standard scaling."
            />
            <StepCard
              step="02"
              title="Feature selection"
              body="Correlation and mutual information used jointly to drop low-relevance features (station, rain, swd…) and redundant ones (temp, pressure, time). Final set: 7 features."
            />
            <StepCard
              step="03"
              title="Feature extraction (PCA)"
              body="PCA reduces the 17-feature set to principal components. Three components capture the dominant variance (error ≈ 55.5 µg/m³), but non-linear dependencies limit its usefulness here."
            />
            <StepCard
              step="04"
              title="Error estimation"
              body="Bootstrap 632 method (MLxtend) used throughout — low bias and low variance, making it more reliable than simple k-fold. 10 splits yield σ = 0.255 µg/m³."
            />
            <StepCard
              step="05"
              title="Model selection"
              body="Seven models trained and cross-compared across all three feature sets. Bootstrap aggregating trees with selected features win at 31.42 µg/m³."
            />
          </div>
        </Section>

        {/* ── MODEL BENCHMARK ── */}
        <Section label="Results" title="Seven models, three feature sets">
          <p
            style={{
              fontSize: '0.88rem',
              color: C.textSec,
              lineHeight: 1.75,
              maxWidth: 700,
              marginBottom: '1.75rem',
            }}
          >
            Every model is evaluated with the Bootstrap 632 error (µg/m³) on the full feature set,
            the 7-feature selected set, and the PCA-reduced set.{' '}
            <strong style={{color: 'rgb(16 105 79)'}}>Green bold</strong> = lowest error for that
            model.
          </p>
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
              gap: '0.9rem',
            }}
          >
            <ModelCard
              name="Bootstrap Aggregating Trees"
              tier="top"
              errorFull={31.6}
              errorSelected={31.42}
              errorPCA={41.78}
              note="Chosen as the final model. Selected features outperform the full set thanks to reduced dimensionality. No overfitting observed up to depth 33."
            />
            <ModelCard
              name="Multilayer Perceptron"
              tier="top"
              errorFull={31.94}
              errorSelected={37.52}
              errorPCA={46.16}
              note="20 hidden layers · 100 neurons · 300 epochs. Full features win here — the network learns its own feature weighting. PyTorch implementation."
            />
            <ModelCard
              name="Regression Tree"
              tier="mid"
              errorFull={40.39}
              errorSelected={40.23}
              errorPCA={51.48}
              note="Best depth ≈ 10–11. PCA set overfits at depth 7. Full and selected features plateau without further overfitting."
            />
            <ModelCard
              name="K-Nearest Neighbour"
              tier="mid"
              errorFull={44.12}
              errorSelected={38.51}
              errorPCA={48.58}
              note="Selected features strongly outperform full set — high-dimensional Euclidean distance degrades neighbour quality. Best at K = 4."
            />
            <ModelCard
              name="Lasso"
              tier="basic"
              errorFull={44.06}
              errorSelected={44.07}
              errorPCA={53.92}
              note="L1 regularisation sets low-relevance weights to zero. Best at λ = 0.01. Redundant with linear regression given the large training set."
            />
            <ModelCard
              name="Ridge Regression"
              tier="basic"
              errorFull={44.15}
              errorSelected={44.38}
              errorPCA={53.91}
              note="Performance nearly constant for λ ∈ [0.01, 100], then underfits. Best at λ = 0.61."
            />
            <ModelCard
              name="Linear Regression"
              tier="basic"
              errorFull={44.35}
              errorSelected={44.5}
              errorPCA={54.1}
              note="Validates the feature selection — 7 selected features match the full-set error. PCA performs poorly due to non-linear dependencies."
            />
          </div>
        </Section>

        {/* ── CONCLUSION ── */}
        <Section label="Conclusion" title="Key findings" noBorder>
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
              gap: '1rem',
              marginBottom: '2.5rem',
            }}
          >
            {[
              {
                title: 'Ensemble methods dominate',
                body: 'Bootstrap aggregating trees halve the error compared to linear baselines (31.42 vs 44.35 µg/m³), confirming that ensemble diversity is the single most impactful lever here.',
              },
              {
                title: 'Feature selection vs extraction',
                body: 'Mutual-information-based selection (7 features) matches or beats the full 17-feature set for all non-neural models. PCA consistently underperforms due to non-linear feature dependencies.',
              },
              {
                title: 'Neural networks need all features',
                body: 'The MLP achieves its lowest error with the full feature set — unlike tree-based models. The network learns its own relevance weighting, making manual selection counterproductive.',
              },
            ].map(({title, body}) => (
              <div
                key={title}
                style={{
                  background: C.bgCard,
                  border: `1px solid ${C.border}`,
                  borderRadius: 14,
                  padding: '1.25rem 1.4rem',
                }}
              >
                <h3
                  style={{
                    fontSize: '0.85rem',
                    fontWeight: 600,
                    color: C.text,
                    marginBottom: '0.4rem',
                  }}
                >
                  {title}
                </h3>
                <p style={{fontSize: '0.78rem', color: C.textSec, lineHeight: 1.65}}>{body}</p>
              </div>
            ))}
          </div>

          <div style={{display: 'flex', gap: '0.6rem', flexWrap: 'wrap'}}>
            <ActionBtn
              href="https://martinbraquet.com/wp-content/uploads/LELEC2870-Project_groupAM-1.pdf"
              primary
            >
              <DownloadIcon /> Read the Report
            </ActionBtn>
            <ActionBtn href="https://github.com/MartinBraquet/machine-learning-ELEC2870">
              <GithubIcon /> GitHub Repository
            </ActionBtn>
          </div>
        </Section>
      </div>
    </PageBase>
  )
}
