import {
  ActionBtn,
  BackLink,
  Badge,
  CodeBlock,
  ExternalIcon,
  GithubIcon,
  Section,
  StatBubble,
  TechTag,
} from 'web/components/badges'
import {CustomLink} from 'web/components/links'
import {PageBase} from 'web/components/page-base'
import {SEO} from 'web/components/SEO'
import {C} from 'web/lib/colors'

// ── Generated text quote ──────────────────────────────────────────────────────

function GeneratedQuote({prompt, output, label}: {prompt: string; output: string; label?: string}) {
  return (
    <div
      style={{
        background: C.bgCard,
        border: `1px solid ${C.border}`,
        borderRadius: 14,
        overflow: 'hidden',
      }}
    >
      <div
        style={{
          padding: '0.7rem 1.1rem',
          borderBottom: `1px solid ${C.border}`,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          gap: '0.5rem',
        }}
      >
        <div style={{display: 'flex', alignItems: 'center', gap: '0.5rem'}}>
          <span style={{fontFamily: "'DM Mono', monospace", fontSize: '0.7rem', color: C.textTert}}>
            prompt
          </span>
          <span
            style={{
              fontFamily: "'DM Mono', monospace",
              fontSize: '0.72rem',
              color: C.text,
              fontStyle: 'italic',
            }}
          >
            "{prompt}"
          </span>
        </div>
        {label && (
          <span
            style={{
              fontSize: '0.6rem',
              fontWeight: 600,
              letterSpacing: '0.08em',
              textTransform: 'uppercase',
              color: C.red,
              background: C.redA08,
              padding: '0.2rem 0.55rem',
              borderRadius: 100,
              whiteSpace: 'nowrap',
              flexShrink: 0,
            }}
          >
            {label}
          </span>
        )}
      </div>
      <p
        style={{
          margin: 0,
          padding: '1rem 1.25rem',
          fontSize: '0.82rem',
          color: C.textSec,
          lineHeight: 1.75,
          fontStyle: 'italic',
          borderLeft: `3px solid ${C.redA18}`,
        }}
      >
        {output}
      </p>
    </div>
  )
}

// ── Before/after comparison ───────────────────────────────────────────────────

function BeforeAfter({prompt, before, after}: {prompt: string; before: string; after: string}) {
  return (
    <div style={{border: `1px solid ${C.border}`, borderRadius: 14, overflow: 'hidden'}}>
      {/* prompt header */}
      <div
        style={{
          padding: '0.8rem 1.25rem',
          background: C.bgCard,
          borderBottom: `1px solid ${C.border}`,
          display: 'flex',
          alignItems: 'center',
          gap: '0.75rem',
        }}
      >
        <span
          style={{
            fontFamily: "'DM Mono', monospace",
            fontSize: '0.65rem',
            color: C.textTert,
            flexShrink: 0,
          }}
        >
          input
        </span>
        <span
          style={{
            fontFamily: "'DM Mono', monospace",
            fontSize: '0.75rem',
            color: C.text,
            fontStyle: 'italic',
          }}
        >
          "{prompt}"
        </span>
      </div>
      <div style={{display: 'grid', gridTemplateColumns: '1fr 1fr'}}>
        {/* before */}
        <div style={{padding: '1.1rem 1.25rem', borderRight: `1px solid ${C.border}`}}>
          <span
            style={{
              display: 'inline-block',
              fontSize: '0.6rem',
              fontWeight: 600,
              letterSpacing: '0.08em',
              textTransform: 'uppercase',
              color: C.textTert,
              background: C.inkA04,
              border: `1px solid ${C.border}`,
              padding: '0.2rem 0.55rem',
              borderRadius: 100,
              marginBottom: '0.75rem',
            }}
          >
            Before fine-tuning
          </span>
          <p
            style={{
              fontSize: '0.79rem',
              color: C.textTert,
              lineHeight: 1.72,
              fontStyle: 'italic',
              margin: 0,
            }}
          >
            {before}
          </p>
        </div>
        {/* after */}
        <div style={{padding: '1.1rem 1.25rem', background: `${C.redA08}55`}}>
          <span
            style={{
              display: 'inline-block',
              fontSize: '0.6rem',
              fontWeight: 600,
              letterSpacing: '0.08em',
              textTransform: 'uppercase',
              color: C.red,
              background: C.redA08,
              border: `1px solid ${C.redA18}`,
              padding: '0.2rem 0.55rem',
              borderRadius: 100,
              marginBottom: '0.75rem',
            }}
          >
            After fine-tuning
          </span>
          <p
            style={{
              fontSize: '0.79rem',
              color: C.textSec,
              lineHeight: 1.72,
              fontStyle: 'italic',
              margin: 0,
            }}
          >
            {after}
          </p>
        </div>
      </div>
    </div>
  )
}

export default function LLMPage() {
  return (
    <PageBase>
      <SEO
        title={'LLM from Scratch'}
        description={
          'A full transformer implementation built without any external AI APIs — encoding, embedding, multi-head attention, and MLP layers.'
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
            L
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
              Large Language Models <span style={{color: C.red}}>from Scratch</span>
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
              Personal Project · 2024
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
              className="custom-link"
            >
              A full transformer implementation built without any external AI APIs — encoding,
              embedding, multi-head attention, and MLP layers — that can train on any text corpus or
              fine-tune{' '}
              <CustomLink href="https://huggingface.co/openai-community/gpt2-xl">GPT-2</CustomLink>{' '}
              on custom data for text generation. Driven by the{' '}
              <CustomLink href="https://proceedings.neurips.cc/paper_files/paper/2017/file/3f5ee243547dee91fbd053c1c4a845aa-Paper.pdf">
                Attention is All You Need
              </CustomLink>{' '}
              paper.
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
              {['Python', 'PyTorch'].map((t) => (
                <TechTag key={t}>{t}</TechTag>
              ))}
              <StatBubble>Full Transformer Implementation</StatBubble>
            </div>

            <div
              style={{
                display: 'flex',
                gap: '0.6rem',
                flexWrap: 'wrap',
                animation: 'fadeUp 0.55s 0.22s ease both',
              }}
            >
              <ActionBtn href="https://github.com/MartinBraquet/llm" primary>
                <GithubIcon /> GitHub
              </ActionBtn>
            </div>
          </div>
        </header>

        {/* ── DEMO GIF + DESCRIPTION ── */}
        <div style={{borderBottom: `1px solid ${C.border}`}}>
          <div
            style={{
              maxWidth: 900,
              margin: '0 auto',
              padding: '3rem 2.5rem',
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
              gap: '2rem',
              alignItems: 'center',
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
                  marginBottom: '0.75rem',
                }}
              >
                Live demo — text generation
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
                  src="https://raw.githubusercontent.com/MartinBraquet/llm/refs/heads/main/demo/demo.gif"
                  alt="LLM text generation demo"
                  style={{width: '100%', display: 'block'}}
                />
              </div>
            </div>
            <div style={{display: 'flex', flexDirection: 'column', gap: '1rem'}}>
              {[
                {
                  icon: '🔨',
                  title: 'Built from scratch',
                  body: 'No OpenAI API, no Hugging Face trainer. Every layer — tokenizer, embedding, attention, MLP — is implemented and explained.',
                },
                {
                  icon: '📖',
                  title: 'Train on any text',
                  body: 'Feed it a book, a webpage, or a corpus. The model learns the style and content of whatever you provide.',
                },
                {
                  icon: '🔧',
                  title: 'Fine-tune GPT-2',
                  body: "Load pre-trained GPT-2 weights and nudge them with your own text. The model inherits GPT-2's language understanding and adapts it to your domain.",
                },
              ].map(({icon, title, body}) => (
                <div
                  key={title}
                  style={{
                    display: 'flex',
                    gap: '0.9rem',
                    padding: '1rem 1.1rem',
                    background: C.bgCard,
                    border: `1px solid ${C.border}`,
                    borderRadius: 12,
                  }}
                >
                  <span style={{fontSize: '1.2rem', flexShrink: 0, lineHeight: 1.4}}>{icon}</span>
                  <div>
                    <span
                      style={{
                        fontSize: '0.82rem',
                        fontWeight: 600,
                        color: C.text,
                        display: 'block',
                        marginBottom: '0.2rem',
                      }}
                    >
                      {title}
                    </span>
                    <span style={{fontSize: '0.78rem', color: C.textSec, lineHeight: 1.6}}>
                      {body}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* ── STATS BAR ── */}
        <div style={{background: C.bgCard, borderBottom: `1px solid ${C.border}`}}>
          <div style={{maxWidth: 1100, margin: '0 auto', display: 'flex', flexWrap: 'wrap'}}>
            {[
              {n: '28M', label: 'Params (from scratch)', sub: 'Trains in 5 min · $0.20'},
              {n: '1.5B', label: 'Params (fine-tuned)', sub: 'GPT-2 XL · 48 layers'},
              {n: '6', label: 'Attention heads', sub: 'From-scratch config'},
              {n: '$0.50', label: 'Fine-tune cost', sub: 'On 24-vCPU · 80 GB GPU'},
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

        {/* ── ARCHITECTURE ── */}
        <Section label="Architecture" title="The transformer, layer by layer">
          <p
            style={{
              fontSize: '0.88rem',
              color: C.textSec,
              lineHeight: 1.75,
              maxWidth: 680,
              marginBottom: '1.75rem',
            }}
          >
            Each component of the transformer is implemented from first principles. The architecture
            follows the original "Attention is All You Need" paper, extended with modern
            improvements from GPT-2.
          </p>
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(230px, 1fr))',
              gap: '0.9rem',
            }}
          >
            {[
              {
                step: '01',
                name: 'Tokenization & Encoding',
                desc: 'GPT-2 byte-pair encoding converts raw text into integer token IDs. Vocabulary size: 50,257 tokens.',
              },
              {
                step: '02',
                name: 'Token + Positional Embedding',
                desc: 'Each token ID is mapped to a dense vector. A separate positional embedding encodes sequence order.',
              },
              {
                step: '03',
                name: 'Multi-Head Self-Attention',
                desc: 'The key mechanism: each token attends to all others. Multiple heads learn different relational patterns in parallel.',
              },
              {
                step: '04',
                name: 'Layer Norm + Residual',
                desc: 'Pre-norm architecture stabilizes training. Residual connections ensure gradients flow through deep networks.',
              },
              {
                step: '05',
                name: 'MLP (Feed-Forward)',
                desc: 'Two linear layers with GELU activation. Applies per-token transformation to mix information across the embedding dimension.',
              },
              {
                step: '06',
                name: 'Language Model Head',
                desc: 'Final linear projection maps embeddings to vocabulary logits. Softmax yields next-token probabilities.',
              },
            ].map(({step, name, desc}) => (
              <div
                key={step}
                style={{
                  background: C.bgCard,
                  border: `1px solid ${C.border}`,
                  borderRadius: 14,
                  padding: '1.25rem',
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
                  {step}
                </span>
                <span
                  style={{
                    display: 'block',
                    fontSize: '0.82rem',
                    fontWeight: 600,
                    color: C.text,
                    marginBottom: '0.4rem',
                    paddingRight: '2rem',
                  }}
                >
                  {name}
                </span>
                <p style={{fontSize: '0.78rem', color: C.textSec, lineHeight: 1.65, margin: 0}}>
                  {desc}
                </p>
              </div>
            ))}
          </div>
        </Section>

        {/* ── FINE-TUNING COMPARISON ── */}
        <Section label="Results" title="Fine-tuning GPT-2 on The Little Prince">
          <p
            style={{
              fontSize: '0.88rem',
              color: C.textSec,
              lineHeight: 1.75,
              maxWidth: 700,
              marginBottom: '1.75rem',
            }}
          >
            We load GPT-2 XL (1.5B parameters) and fine-tune it on <em>The Little Prince</em> by
            Antoine de Saint-Exupéry. The shift in style, vocabulary, and thematic content is
            immediate — even with just 5 minutes of training.
          </p>
          <BeforeAfter
            prompt="The essential is invisible to"
            before="The essential is invisible to the common man, but that which is essential to us so is called in the proper name. And, therefore, the power or work of generation is an essential to the nature of an orderly creature, for it serves for the preservation of the natural order of the generation. Secondly, God by the very power which is ordained to man, produces a true and sensible image of himself, as has been observed."
            after="The essential is invisible to the eye; the indispensable is invisible to the mind. It is what makes one day different from other days, one hour from other hours. It is what makes one day a good day, and one hour a bad day. So then I chose a flower that was unique in the world. I chose the rose that belonged to me. And it is she that I shall put under the glass globe."
          />
          <p
            style={{
              fontSize: '0.78rem',
              color: C.textTert,
              marginTop: '0.9rem',
              fontStyle: 'italic',
            }}
          >
            Before: GPT-2 XL with no fine-tuning, producing generic philosophical prose. After: same
            weights shifted toward the book's voice, vocabulary, and imagery.
          </p>
        </Section>

        {/* ── GENERATED TEXT EXAMPLES ── */}
        <Section label="Generated Text" title="What the models produce">
          <p
            style={{
              fontSize: '0.88rem',
              color: C.textSec,
              lineHeight: 1.75,
              maxWidth: 700,
              marginBottom: '1.75rem',
            }}
          >
            Examples from the fine-tuned GPT-2 XL model. The model was not given any summary
            instructions — it generates text by continuation. Results are cherry-picked to show the
            ceiling of what the approach can achieve.
          </p>
          <div style={{display: 'flex', flexDirection: 'column', gap: '1.1rem'}}>
            <GeneratedQuote
              label="Fine-tuned · GPT-2 XL"
              prompt="And now here is my secret"
              output={
                'And now here is my secret, a very simple secret: It is only with the heart that one can see rightly; what is essential is invisible to the eye.\n\n"What is essential is invisible to the eye," the little prince repeated, so that he would be sure to remember.\n\n"It is the time you have wasted for your rose that makes your rose so important."'
              }
            />
            <GeneratedQuote
              label="Fine-tuned · GPT-2 XL"
              prompt="Love is the answer"
              output={
                'Love is the answer that sometimes requires a little meditation.\n\nI want you to understand, very clearly, why it is that during the fifty-four years that I have had you as my friend, I have had no desire to harm you. In fact, I have constantly tried to help you. I have tried to make you happy when you were angry, and I have tried to make you happier still when you were happy.'
              }
            />
            <GeneratedQuote
              label="Fine-tuned · GPT-2 XL"
              prompt="\n (no prompt)"
              output={
                'This time, the little prince came back to his idea.\n\n"I myself own a flower. Do you think that her colour is an accident of birth?"\n\n"Of course it is." The businessman raised his head. "Flowers have been growing thorns for a long time. And if the thorns are not stopped, they bring disaster on the plants."'
              }
            />
          </div>

          <div
            style={{
              marginTop: '1.5rem',
              padding: '1rem 1.25rem',
              background: C.bgCard,
              border: `1px solid ${C.border}`,
              borderRadius: 12,
              display: 'flex',
              gap: '0.75rem',
              alignItems: 'flex-start',
            }}
          >
            <span style={{color: C.red, fontSize: '0.75rem', paddingTop: '0.1rem', flexShrink: 0}}>
              ⚠
            </span>
            <p style={{fontSize: '0.78rem', color: C.textTert, lineHeight: 1.65, margin: 0}}>
              <strong style={{color: C.textSec}}>Disclaimer:</strong> Examples above are
              cherry-picked to show the best achievable output. GPT-2 XL cannot perform abstract
              reasoning tasks (e.g., "summarize The Little Prince"). Larger models like GPT-3+ are
              needed for that. Do not draw statistical conclusions from individual generations.
            </p>
          </div>
        </Section>

        {/* ── GPT-2 MODEL SPECS ── */}
        <Section label="Pre-trained Models" title="GPT-2 variants supported">
          <p
            style={{
              fontSize: '0.88rem',
              color: C.textSec,
              lineHeight: 1.75,
              maxWidth: 700,
              marginBottom: '1.75rem',
            }}
          >
            All GPT-2 variants are available via{' '}
            <code
              style={{
                fontFamily: "'DM Mono', monospace",
                fontSize: '0.82rem',
                background: C.inkA04,
                padding: '0.1rem 0.35rem',
                borderRadius: 4,
              }}
            >
              init_from='online'
            </code>
            . Weights are downloaded automatically on first use.
          </p>
          <div style={{overflowX: 'auto'}}>
            <table
              style={{
                borderCollapse: 'collapse',
                width: '100%',
                fontSize: '0.78rem',
                minWidth: 480,
              }}
            >
              <thead>
                <tr style={{borderBottom: `1px solid ${C.border}`}}>
                  {['model_path', 'Layers', 'Heads', 'Embed dims', 'Parameters', 'Size'].map(
                    (h) => (
                      <th
                        key={h}
                        style={{
                          padding: '0.6rem 1rem',
                          textAlign: 'left',
                          color: C.textTert,
                          fontWeight: 500,
                          fontFamily: h === 'model_path' ? "'DM Mono', monospace" : 'inherit',
                          fontSize: '0.7rem',
                          background: C.bgCard,
                          whiteSpace: 'nowrap',
                        }}
                      >
                        {h}
                      </th>
                    ),
                  )}
                </tr>
              </thead>
              <tbody>
                {[
                  {path: 'gpt2', layers: 12, heads: 12, dims: 768, params: '124M', size: '500 MB'},
                  {
                    path: 'gpt2-medium',
                    layers: 24,
                    heads: 16,
                    dims: 1024,
                    params: '350M',
                    size: '1.4 GB',
                  },
                  {
                    path: 'gpt2-large',
                    layers: 36,
                    heads: 20,
                    dims: 1280,
                    params: '774M',
                    size: '3 GB',
                  },
                  {
                    path: 'gpt2-xl',
                    layers: 48,
                    heads: 25,
                    dims: 1600,
                    params: '1,558M',
                    size: '6 GB',
                    highlight: true,
                  },
                ].map((row) => (
                  <tr
                    key={row.path}
                    style={{
                      borderBottom: `1px solid ${C.border}`,
                      background: row.highlight ? C.redA08 : 'transparent',
                      transition: 'background 0.15s',
                    }}
                  >
                    <td
                      style={{
                        padding: '0.65rem 1rem',
                        fontFamily: "'DM Mono', monospace",
                        fontSize: '0.75rem',
                        color: row.highlight ? C.red : C.text,
                        fontWeight: row.highlight ? 600 : 400,
                      }}
                    >
                      {row.path}
                      {row.highlight && (
                        <span
                          style={{
                            marginLeft: '0.5rem',
                            fontSize: '0.6rem',
                            fontWeight: 600,
                            letterSpacing: '0.06em',
                            textTransform: 'uppercase',
                            color: C.red,
                          }}
                        >
                          used above
                        </span>
                      )}
                    </td>
                    <td
                      style={{
                        padding: '0.65rem 1rem',
                        color: C.textSec,
                        fontFamily: "'DM Mono', monospace",
                        fontSize: '0.75rem',
                      }}
                    >
                      {row.layers}
                    </td>
                    <td
                      style={{
                        padding: '0.65rem 1rem',
                        color: C.textSec,
                        fontFamily: "'DM Mono', monospace",
                        fontSize: '0.75rem',
                      }}
                    >
                      {row.heads}
                    </td>
                    <td
                      style={{
                        padding: '0.65rem 1rem',
                        color: C.textSec,
                        fontFamily: "'DM Mono', monospace",
                        fontSize: '0.75rem',
                      }}
                    >
                      {row.dims}
                    </td>
                    <td
                      style={{
                        padding: '0.65rem 1rem',
                        color: C.textSec,
                        fontFamily: "'DM Mono', monospace",
                        fontSize: '0.75rem',
                      }}
                    >
                      {row.params}
                    </td>
                    <td
                      style={{
                        padding: '0.65rem 1rem',
                        color: C.textSec,
                        fontFamily: "'DM Mono', monospace",
                        fontSize: '0.75rem',
                      }}
                    >
                      {row.size}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </Section>

        {/* ── QUICK START ── */}
        <Section label="Usage" title="Start generating text in minutes" noBorder>
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(400px, 1fr))',
              gap: '1.25rem',
            }}
          >
            <CodeBlock
              label="Train from scratch on any text"
              code={`from llm.train import Trainer

trainer = Trainer(
    model_path='results/my_model',
    training_data_path='https://...book.txt',
    n_layer=6,
    n_head=6,
    n_embd=384,
)
trainer.run()`}
              note="Stops automatically when evaluation loss plateaus"
            />
            <CodeBlock
              label="Generate text from a trained model"
              code={`from llm.sample import Sampler

sampler = Sampler(model_path='results/my_model')
text = sampler.generate_text(
    prompt='Once upon a time',
    max_tokens=200,
)
print(text)`}
            />
            <CodeBlock
              label="Fine-tune GPT-2 on your own corpus"
              code={`from llm.train import Trainer

trainer = Trainer(
    model_path='results/finetuned',
    training_data_path='my_text.txt',
    init_from='gpt2-xl',  # load pretrained
)
trainer.run()`}
              note="First run downloads GPT-2 weights automatically"
            />
            <CodeBlock
              label="Use a pre-trained GPT-2 model directly"
              code={`from llm.sample import Sampler

sampler = Sampler(
    init_from='online',
    model_path='gpt2-xl',
)
print(sampler.generate_text(
    prompt='Today I decided to',
))`}
              note="Downloads ~6 GB on first use · runs on CPU"
            />
          </div>

          <div style={{marginTop: '2.5rem', display: 'flex', gap: '0.6rem', flexWrap: 'wrap'}}>
            <ActionBtn href="https://github.com/MartinBraquet/llm" primary>
              <GithubIcon /> GitHub Repository
            </ActionBtn>
            <ActionBtn href="https://github.com/MartinBraquet/llm/blob/main/demo/from_scratch.ipynb">
              <ExternalIcon /> From-Scratch Notebook
            </ActionBtn>
            <ActionBtn href="https://github.com/MartinBraquet/llm/blob/main/demo/finetuning.ipynb">
              <ExternalIcon /> Fine-Tuning Notebook
            </ActionBtn>
          </div>
        </Section>
      </div>
    </PageBase>
  )
}
