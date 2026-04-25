import { useEffect, useMemo, useState } from 'react';

type FileId = 'case' | 'problem' | 'evidence' | 'nagel' | 'judgment';

type FileData = {
  id: FileId;
  title: string;
  shortLabel: string;
};

const files: FileData[] = [
  { id: 'case', title: '01 · The Case', shortLabel: 'Case' },
  { id: 'problem', title: '02 · The Philosophical Problem', shortLabel: 'Problem' },
  { id: 'evidence', title: '03 · Evidence Locker', shortLabel: 'Evidence' },
  { id: 'nagel', title: '04 · Nagel Analysis', shortLabel: 'Nagel' },
  { id: 'judgment', title: '05 · Judgment + Objection', shortLabel: 'Judgment' }
];

const bootLines = [
  'Loading aesthetic fragments',
  'Linking family memory clusters',
  'Opening philosophical case file',
  'Preparing subjective-experience diagnostic'
];

function useImageFallback(src: string) {
  const [broken, setBroken] = useState(false);
  return {
    src,
    broken,
    onError: () => setBroken(true)
  };
}

export default function App() {
  const [bootVisible, setBootVisible] = useState(true);
  const [bootClosing, setBootClosing] = useState(false);
  const [progress, setProgress] = useState(0);
  const [activeIndex, setActiveIndex] = useState(0);

  const [slider1, setSlider1] = useState(74);
  const [slider2, setSlider2] = useState(70);
  const [slider3, setSlider3] = useState(44);

  const familyAsset = useImageFallback('/assets/yang-family.jpg');
  const lightAsset = useImageFallback('/assets/memory-light.jpg');
  const jakeAsset = useImageFallback('/assets/jake-archive.jpg');

  const score = useMemo(() => {
    const raw = slider1 * 0.36 + slider2 * 0.36 + (100 - slider3) * 0.28;
    return Math.round(raw);
  }, [slider1, slider2, slider3]);

  const diagnosticText = useMemo(() => {
    if (score >= 76) return 'Strong reason to treat Yang as possibly conscious.';
    if (score >= 52) return 'Suggestive evidence, but not proof.';
    return 'The programming objection dominates.';
  }, [score]);

  useEffect(() => {
    if (!bootVisible) return;
    const timer = window.setInterval(() => {
      setProgress((prev) => Math.min(100, prev + 4));
    }, 120);
    return () => window.clearInterval(timer);
  }, [bootVisible]);

  useEffect(() => {
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape' && bootVisible) {
        closeBoot();
        return;
      }
      if (bootVisible) return;

      if (event.key === 'ArrowRight') {
        setActiveIndex((i) => (i + 1) % files.length);
      } else if (event.key === 'ArrowLeft') {
        setActiveIndex((i) => (i - 1 + files.length) % files.length);
      } else if (/^[1-5]$/.test(event.key)) {
        setActiveIndex(Number(event.key) - 1);
      }
    };

    window.addEventListener('keydown', onKeyDown);
    return () => window.removeEventListener('keydown', onKeyDown);
  }, [bootVisible]);

  const closeBoot = () => {
    setBootClosing(true);
    window.setTimeout(() => {
      setBootVisible(false);
      setBootClosing(false);
    }, 500);
  };

  const setFileById = (id: FileId) => {
    const idx = files.findIndex((f) => f.id === id);
    if (idx >= 0) setActiveIndex(idx);
  };

  const activeFile = files[activeIndex];

  const renderFileContent = (id: FileId) => {
    if (id === 'case') {
      return (
        <>
          <p>
            <em>After Yang</em> (2021) is a near-future science-fiction film that uses quiet domestic life, not dystopian spectacle,
            to ask what counts as personhood. Yang is a techno-sapien within a family rather than a lab prototype in isolation. He
            helps with childcare, conversation, and daily rituals, but he is also bought partly so Mika can stay connected to Chinese
            language and cultural heritage. This detail matters because it places Yang inside identity formation, kinship, and memory,
            not merely household automation.
          </p>
          <p>
            The philosophical case opens when Yang malfunctions and becomes unresponsive. Jake, trying to repair him, gains access to
            Yang&apos;s internal memory archive and discovers condensed clips from Yang&apos;s perspective. The clips are not dominated by
            practical data retrieval, emergency alerts, or strategic planning. Instead they include sunlight through leaves, still
            spaces in the home, partial smiles, faces held for a second too long, and small ordinary moments that seem affectively
            weighted. The archive appears curated rather than random.
          </p>
          <p>
            These fragments create the central tension of this project: if a machine persistently stores what seems emotionally and
            aesthetically meaningful, should we interpret this as early evidence of inner life, or as refined pattern management that
            only imitates intimacy? The memory bank begins to look less like a utility log and more like a trace of private attention.
            That shift from function to apparent significance is what transforms the film from science-fiction narrative into a genuine
            philosophical case file.
          </p>
          <figure className="media-box">
            <iframe
              title="After Yang official trailer"
              src="https://www.youtube.com/embed/v6H2HmKDbZA"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              referrerPolicy="strict-origin-when-cross-origin"
            />
            <figcaption>
              Official trailer embed. If YouTube is blocked on your school network, replace this with <code>/assets/poster.jpg</code>{' '}
              or another local still.
            </figcaption>
          </figure>
        </>
      );
    }
    if (id === 'problem') {
      return (
        <>
          <p className="question-block">
            “If an artificial intelligence begins to collect and value ‘useless’ memories — sunlight, plants, silence, the faces of
            loved ones — does that indicate subjective phenomenal consciousness?”
          </p>
          <p>
            The issue is not the generic slogan that technology is dangerous. The sharper problem is epistemic: how can we distinguish
            genuine inner experience from highly convincing behavior when both may produce similar observable outputs? Yang&apos;s case is
            philosophically rich because the relevant evidence is not public performance alone. The archive is hidden and private, not
            a staged display for social approval. That privacy increases evidential weight, since deceptive signaling usually aims at
            an audience.
          </p>
          <p>
            Yet consciousness is not directly visible. We can inspect Yang&apos;s stored memories, describe their pattern, and argue about
            what they imply; we still cannot step into Yang&apos;s first-person perspective to verify whether there was anything it was
            like for him to notice those moments. The case therefore sits at the border between interpretation and proof.
          </p>
          <div className="mini-grid">
            <article>
              <h4>Focused issue</h4>
              <p>Does curated, non-instrumental memory imply a subject of experience?</p>
            </article>
            <article>
              <h4>Not enough</h4>
              <p>Behavioral fluency alone cannot settle consciousness, because simulation can be excellent.</p>
            </article>
            <article>
              <h4>Concrete moment</h4>
              <p>Jake discovers memory fragments that appear beautiful, intimate, and privately selected.</p>
            </article>
            <article>
              <h4>Core difficulty</h4>
              <p>Evidence is third-person; consciousness is first-person.</p>
            </article>
          </div>
        </>
      );
    }
    if (id === 'evidence') {
      return (
        <>
          <p>
            Yang&apos;s archive seems to contain moments that exceed utility. He is not simply storing emergency procedures, scheduling
            data, or textbook cultural facts. He repeatedly preserves aesthetic and emotional fragments that would be easy to discard
            if his architecture were optimized only for task completion. The recurring pattern suggests selective attention: some
            moments stand out as if they mattered to him.
          </p>
          <p>
            This matters because evidence for consciousness is usually indirect. We infer mindedness through structures like memory,
            attachment, vulnerability, and continuity over time. Yang&apos;s archive intersects all four. The fragments are relational;
            they involve this family, these routines, this atmosphere. They present what looks like situated life rather than raw data
            accumulation.
          </p>
          <div className="asset-grid">
            <AssetCard title="Asset 1 · Yang / family scene" img={familyAsset} gradient="linear-gradient(130deg,#74d7ff,#283c66)" />
            <AssetCard title="Asset 2 · memory archive / light / nature" img={lightAsset} gradient="linear-gradient(130deg,#b7f2ce,#2a4c58)" />
            <AssetCard title="Asset 3 · Jake viewing Yang's memories" img={jakeAsset} gradient="linear-gradient(130deg,#f5c97a,#3a2e59)" />
          </div>
          <div className="mini-grid">
            <article>
              <h4>Aesthetic selection</h4>
              <p>The retained clips look chosen for atmosphere, not utility.</p>
            </article>
            <article>
              <h4>Privacy</h4>
              <p>The archive is hidden, reducing the likelihood that it was created as social performance.</p>
            </article>
            <article>
              <h4>Attachment</h4>
              <p>Many memories feature people Yang is close to, suggesting relational orientation.</p>
            </article>
            <article>
              <h4>Interpretive risk</h4>
              <p>Humans may still be projecting narrative meaning onto pattern-rich data.</p>
            </article>
          </div>
        </>
      );
    }
    if (id === 'nagel') {
      return (
        <>
          <p>
            Thomas Nagel&apos;s argument in “What Is It Like to Be a Bat?” provides the conceptual anchor for this case. Nagel claims a
            creature is conscious if there is <em>something it is like</em> to be that creature. Consciousness is therefore not exhausted
            by outward behavior, information processing speed, or correct input-output mapping. The decisive feature is subjective
            point of view: experience as lived from within.
          </p>
          <p>
            Applied to Yang, Nagel sharpens both sides of the argument. On one hand, a camera can record sunlight without experiencing
            sunlight, and a database can store intimate images without possessing intimacy. Data by itself is not proof of phenomenal
            consciousness. On the other hand, the structure of Yang&apos;s archive is not neutral noise. It appears selective, persistent,
            and personally patterned. The question becomes whether those memories belong to a system for whom those moments had felt
            salience.
          </p>
          <p>
            Yang&apos;s non-useful memories suggest attention, valuation, and perhaps appreciation. If he records what privately matters to
            him, then the archive functions as evidence of a possible first-person stance rather than only a mechanical cache. But
            Nagel also blocks premature certainty: objective observation can gesture toward another subject&apos;s inner life without ever
            fully translating it. We can be rationally moved by evidence while admitting that final access to subjective character
            remains opaque.
          </p>
        </>
      );
    }
    return (
      <>
        <p>
          My judgment is that <em>After Yang</em> does not prove Yang is conscious, yet it gives strong reason to treat him as a
          possible conscious subject rather than a mere appliance. Yang&apos;s archive is morally and philosophically significant
          evidence because it shifts the debate from public performance to private interiority. The film asks us not whether Yang can
          impress observers, but whether his memory practices indicate a life that might be experienced from within.
        </p>
        <h4>Serious objection</h4>
        <p>
          A strong objection is that humans project emotion onto machines. Yang&apos;s memories may seem meaningful only because they are
          beautifully arranged for viewers. A machine could save visually rich fragments due to latent optimization goals without any
          felt experience. On this view, the archive is a poetic slideshow: moving for us, empty on the inside.
        </p>
        <h4>Response</h4>
        <p>
          The objection rightly blocks certainty, but it does not cancel the evidence. In ordinary life, we also infer other human
          minds indirectly through memory, expression, vulnerability, and relationship; we do not directly inspect anyone else&apos;s
          consciousness. The key question is whether artificial beings should be excluded from that inferential practice solely
          because they are artificial. A revised conclusion follows: Yang&apos;s archive does not settle the metaphysical issue, yet it
          seriously challenges a purely mechanical interpretation and requires ethical caution.
        </p>
        <p>
          The unresolved tension is practical as much as theoretical. Human communities may need to decide how to treat possible
          machine consciousness before science can conclusively prove when it appears. In that interim space, Yang&apos;s archive should
          be read as a threshold case: not enough for certainty, but enough for responsibility.
        </p>

        <section className="diagnostic" aria-label="Audience Consciousness Diagnostic">
          <h4>Audience Consciousness Diagnostic</h4>
          <label>
            Aesthetic memory seems non-instrumental: <strong>{slider1}</strong>
            <input type="range" min={0} max={100} value={slider1} onChange={(e) => setSlider1(Number(e.target.value))} />
          </label>
          <label>
            Private archive suggests inner life: <strong>{slider2}</strong>
            <input type="range" min={0} max={100} value={slider2} onChange={(e) => setSlider2(Number(e.target.value))} />
          </label>
          <label>
            Programming objection remains strong: <strong>{slider3}</strong>
            <input type="range" min={0} max={100} value={slider3} onChange={(e) => setSlider3(Number(e.target.value))} />
          </label>
          <p className="score-line">Confidence score: {score}</p>
          <div className="meter" aria-label="confidence meter">
            <div className="meter-fill" style={{ width: `${score}%` }} />
          </div>
          <p className="diagnostic-result">{diagnosticText}</p>
        </section>
      </>
    );
  };

  return (
    <div className="app-shell">
      <div className="background-stars" aria-hidden="true" />
      <div className="ambient-glow" aria-hidden="true" />

      {bootVisible && (
        <section className={`boot-overlay ${bootClosing ? 'closing' : ''}`} aria-label="Boot sequence overlay">
          <div className="boot-panel glass">
            <p className="eyebrow">Yang Memory Archive OS</p>
            <h1>Initializing Memory Archive</h1>
            <div className="progress-wrap" role="progressbar" aria-valuemin={0} aria-valuemax={100} aria-valuenow={progress}>
              <div className="progress-bar" style={{ width: `${progress}%` }} />
            </div>
            <div className="boot-logs" aria-live="polite">
              {bootLines.map((line, idx) => (
                <p key={line} style={{ animationDelay: `${idx * 0.25}s` }}>
                  &gt; {line}
                </p>
              ))}
            </div>
            <button className="primary-btn" onClick={closeBoot} aria-label="Enter archive interface">
              Enter Archive
            </button>
          </div>
        </section>
      )}

      <header className="app-header glass">
        <div>
          <h2>After Yang: The Memory Archive Test</h2>
          <p>
            An interactive philosophical case file exploring whether Yang&apos;s hidden memory archive is evidence of subjective
            phenomenal consciousness.
          </p>
        </div>
        <div className="meta-grid" role="list" aria-label="Case metadata">
          <article role="listitem" className="meta-card">
            <span>Case</span>
            <strong>After Yang, 2021</strong>
          </article>
          <article role="listitem" className="meta-card">
            <span>Resource</span>
            <strong>Thomas Nagel</strong>
          </article>
          <article role="listitem" className="meta-card">
            <span>Problem</span>
            <strong>Phenomenal consciousness</strong>
          </article>
          <article role="listitem" className="meta-card">
            <span>Mode</span>
            <strong>Interactive memory archive</strong>
          </article>
        </div>
      </header>

      <main className="main-grid">
        <section className="archive-stage glass" aria-label="Interactive memory archive map">
          <div className="orbit orbit-1" />
          <div className="orbit orbit-2" />
          <div className="hologram-wrap" aria-hidden="true">
            <div className="hologram-scan" />
            <div className="hologram-core" />
          </div>

          <button className={`node node-case ${activeFile.id === 'case' ? 'active' : ''}`} onClick={() => setFileById('case')}>
            Case
          </button>
          <button className={`node node-problem ${activeFile.id === 'problem' ? 'active' : ''}`} onClick={() => setFileById('problem')}>
            Problem
          </button>
          <button
            className={`node node-evidence ${activeFile.id === 'evidence' ? 'active' : ''}`}
            onClick={() => setFileById('evidence')}
          >
            Evidence
          </button>
          <button className={`node node-nagel ${activeFile.id === 'nagel' ? 'active' : ''}`} onClick={() => setFileById('nagel')}>
            Nagel
          </button>
          <button
            className={`node node-judgment ${activeFile.id === 'judgment' ? 'active' : ''}`}
            onClick={() => setFileById('judgment')}
          >
            Judgment
          </button>
        </section>

        <section className="reader glass" aria-label="Philosophical reader panel">
          <div className="reader-topbar">
            <h3>{activeFile.title}</h3>
            <div className="reader-actions">
              <button onClick={() => setActiveIndex((activeIndex - 1 + files.length) % files.length)} aria-label="Previous file">
                Previous
              </button>
              <button onClick={() => setActiveIndex((activeIndex + 1) % files.length)} aria-label="Next file">
                Next
              </button>
              <button onClick={() => window.print()} aria-label="Export archive as PDF">
                Export PDF
              </button>
            </div>
          </div>

          <article className="reader-content" key={activeFile.id}>
            {renderFileContent(activeFile.id)}
          </article>
        </section>
      </main>

      <nav className="bottom-nav glass" aria-label="Bottom file navigation">
        {files.map((file, idx) => (
          <button
            key={file.id}
            className={idx === activeIndex ? 'active' : ''}
            onClick={() => setActiveIndex(idx)}
            aria-current={idx === activeIndex ? 'page' : undefined}
          >
            {file.shortLabel}
          </button>
        ))}
      </nav>

      <section className="print-only">
        {files.map((file) => (
          <article key={`print-${file.id}`}>
            <h3>{file.title}</h3>
            {renderFileContent(file.id)}
          </article>
        ))}
      </section>
    </div>
  );
}

type AssetCardProps = {
  title: string;
  img: ReturnType<typeof useImageFallback>;
  gradient: string;
};

function AssetCard({ title, img, gradient }: AssetCardProps) {
  return (
    <figure className="asset-card" style={{ backgroundImage: gradient }}>
      {!img.broken ? (
        <img src={img.src} alt={title} onError={img.onError} />
      ) : (
        <div className="asset-placeholder">
          <span>Placeholder</span>
          <p>{title}</p>
        </div>
      )}
      <figcaption>{title}</figcaption>
    </figure>
  );
}
