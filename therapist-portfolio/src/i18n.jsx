import React, {createContext, useContext, useEffect, useMemo, useState} from 'react'

const I18nContext = createContext({
  lang: 'el', setLang: () => {
  }, t: (k) => k
})

const dict = {
  el: {
    brandName: 'Calm Path Therapy',
    nav: {services: 'Υπηρεσίες', about: 'Σχετικά', testimonials: 'Μαρτυρίες', contact: 'Επικοινωνία'},
    cta: {book: 'Κλείστε Ραντεβού'},

    hero: {
      title: 'Βρείτε καθαρότητα, ίαση και ανάπτυξη.',
      lead: 'Τεκμηριωμένη θεραπεία για άτομα, ζευγάρια και οικογένειες — με ζεστασιά και ενσυναίσθηση.',
      ctaPrimary: 'Κλείστε Δωρεάν Συνάντηση',
      ctaSecondary: 'Δείτε Υπηρεσίες',
      badges: ['Αδειούχος Θεραπευτής (LCSW)', 'Διαθέσιμη Τηλεθεραπεία', 'Εμπιστευτικό & Συμπεριληπτικό'],
      quote: '«Δεν είσαι μια σταγόνα στον ωκεανό. Είσαι ολόκληρος ο ωκεανός σε μία σταγόνα.» — Rumi'
    },

    services: {
      title: 'Υπηρεσίες',
      items: [
        {
          title: 'Ατομική Θεραπεία',
          desc: 'Εξατομικευμένες συνεδρίες για άγχος, κατάθλιψη, στρες και μεταβάσεις ζωής.',
          details: ['ΓΣΘ', 'Ενσυνειδητότητα', 'Τραυματοκεντρική προσέγγιση']
        },
        {
          title: 'Θεραπεία Ζεύγους',
          desc: 'Βελτιώστε την επικοινωνία, ξαναχτίστε την εμπιστοσύνη και διαχειριστείτε τις συγκρούσεις.',
          details: ['Προσέγγιση Gottman', 'Συναισθηματικά Εστιασμένη']
        },
        {
          title: 'Οικογενειακή Θεραπεία',
          desc: 'Ενισχύστε τις σχέσεις, επιλύστε συγκρούσεις και χτίστε υποστηρικτικά συστήματα.',
          details: ['Συστημική Προσέγγιση', 'Εστιασμένη στη Λύση']
        },
        {
          title: 'Έφηβοι & Νέοι Ενήλικες',
          desc: 'Στήριξη για ταυτότητα, σπουδές, διάθεση και κοινωνικές προκλήσεις.',
          details: ['Δεξιότητες Άγχους', 'Αυτοεκτίμηση', 'Στρατηγικές Μελέτης']
        }
      ]
    },

    about: {
      title: 'Γνωρίστε τη/τον Θεραπεύτρια/η σας',
      p1: 'Είμαι η/ο Alex Morgan, LCSW. Τα τελευταία 10+ χρόνια βοηθώ ανθρώπους να περάσουν από την υπερφόρτωση στην ανθεκτικότητα με συνεργατική, τεκμηριωμένη φροντίδα.',
      p2: 'Καλωσορίζω πελάτες από κάθε ταυτότητα και υπόβαθρο. Τραυματοκεντρική, υποστηρικτική για LGBTQIA+ και πολιτισμικά ευαίσθητη προσέγγιση.',
      list: [
        'ΜΑ Κλινικής Κοινωνικής Εργασίας',
        'Αδειούχος Κλινική/ός Κοινωνική/ός Λειτουργός (LCSW)',
        'Πιστοποίηση στο Trauma‑Focused CBT'
      ],
      details: {
        location: 'Τοποθεσία: Κέντρο | Τηλεθεραπεία παντού',
        hours: 'Ώρες: Δευ–Παρ 9:00–18:00',
        insurance: 'Ασφάλιση: Εκτός δικτύου, παροχή αποδείξεων'
      }
    },

    testimonials: {
      title: 'Τι λένε οι πελάτες',
      quotes: [
        {
          text: 'Η Alex με βοήθησε με πρακτικά εργαλεία που χρησιμοποιώ καθημερινά. Νιώθω πιο γειωμένη/ος και αισιόδοξη/ος.',
          author: 'J., πρώην πελάτης'
        },
        {text: 'Επικοινωνούμε πολύ καλύτερα. Η σχέση μας νιώθει ξανά σαν ομάδα.', author: 'R. & M., ζευγάρι'},
        {
          text: 'Ένιωσα ασφάλεια και ότι πραγματικά με άκουγαν. Η θεραπεία έγινε η καλύτερη ώρα της εβδομάδας μου.',
          author: 'T., πελάτης/ισσα'
        },
        {
          text: 'Με στήριξε σε μια δύσκολη μετάβαση στη ζωή μου. Ένιωσα ότι έχω πλάνο και κατεύθυνση.',
          author: 'K., πελάτισσα'
        },
        {
          text: 'Οι συνεδρίες βοήθησαν την οικογένειά μας να επικοινωνεί πιο ουσιαστικά.',
          author: 'Οικ. Π.'
        },
        {
          text: 'Βρήκα ξανά την αυτοπεποίθησή μου και εργαλεία για να διαχειρίζομαι το άγχος.',
          author: 'Μ., πελάτης'
        }
      ]
    },


    contact: {
      title: 'Επικοινωνήστε',
      intro: 'Προτιμάτε γρήγορο μήνυμα ή κλήση; Επιλέξτε εδώ — χωρίς λογαριασμό ή πύλες.',
      emailLabel: 'Email',
      phoneLabel: 'Τηλέφωνο',
      teleLabel: 'Διαθέσιμη Ασφαλής Τηλεθεραπεία',
      btnEmail: 'Στείλτε Email',
      btnCall: 'Κλήση',
      btnCopy: 'Αντιγραφή email',
      btnBook: 'Κλείστε 15‑λεπτο ραντεβού',
      expectTitle: 'Τι να περιμένετε',
      expectList: [
        'Απάντηση εντός 1 εργάσιμης ημέρας',
        'Εμπιστευτικός, χωρίς κριτική χώρος',
        'Διαθέσιμη τηλεθεραπεία',
        'Θέσεις με κλιμακωτή χρέωση (όταν υπάρχουν)'
      ]
    },

    footer: {
      links: {services: 'Υπηρεσίες', about: 'Σχετικά', testimonials: 'Μαρτυρίες', contact: 'Επικοινωνία'},
      legal1: 'Για επείγοντα, καλέστε τον τοπικό αριθμό έκτακτης ανάγκης ή επισκεφθείτε το κοντινότερο ΤΕΠ.',
      legal2: 'Δεν αποτελεί υποκατάστατο υπηρεσιών κρίσης.'
    }
  },

  en: {
    brandName: 'Calm Path Therapy',
    nav: {services: 'Services', about: 'About', testimonials: 'Testimonials', contact: 'Contact'},
    cta: {book: 'Book a Session'},

    hero: {
      title: 'Find clarity, healing, and growth.',
      lead: 'Evidence-based therapy for individuals, couples, and families—delivered with warmth and compassion.',
      ctaPrimary: 'Book a Free Consultation',
      ctaSecondary: 'Explore Services',
      badges: ['Licensed Therapist (LCSW)', 'Telehealth Available', 'Confidential & Inclusive'],
      quote: '“You are not a drop in the ocean. You are the entire ocean in a drop.” — Rumi'
    },

    services: {
      title: 'Services',
      items: [
        {
          title: 'Individual Therapy',
          desc: 'Personalized sessions for anxiety, depression, stress, and life transitions.',
          details: ['CBT', 'Mindfulness', 'Trauma‑informed']
        },
        {
          title: 'Couples Therapy',
          desc: 'Improve communication, rebuild trust, and navigate conflict with care.',
          details: ['Gottman‑informed', 'Emotionally Focused']
        },
        {
          title: 'Family Therapy',
          desc: 'Strengthen relationships, resolve conflicts, and build supportive systems.',
          details: ['Systems Approach', 'Solution‑Focused']
        },
        {
          title: 'Teen & Young Adult',
          desc: 'Support for identity, academics, mood, and social challenges.',
          details: ['Anxiety Skills', 'Self‑esteem', 'Study Habits']
        }
      ]
    },

    about: {
      title: 'Meet Your Therapist',
      p1: 'I’m Alex Morgan, LCSW. Over the past 10+ years, I’ve helped clients move from overwhelm to resilience through collaborative, evidence-based care.',
      p2: 'I welcome clients of all identities and backgrounds. I am trauma‑informed, LGBTQIA+ affirming, and culturally responsive.',
      list: [
        'MA in Clinical Social Work',
        'Licensed Clinical Social Worker (LCSW)',
        'Certified in Trauma‑Focused CBT'
      ],
      details: {
        location: 'Location: Downtown | Telehealth statewide',
        hours: 'Hours: Mon–Fri 9am–6pm',
        insurance: 'Insurance: OON, Superbills available'
      }
    },

    testimonials: {
      title: 'What Clients Say',
      quotes: [
        {
          text: 'Alex helped me find tools I actually use daily. I feel more grounded and hopeful.',
          author: 'J., former client'
        },
        {
          text: 'We communicate so much better now. Our relationship feels like a team again.',
          author: 'R. & M., couple'
        },
        {text: 'I felt safe and truly heard. Therapy became the best hour of my week.', author: 'T., client'},
        {
          text: 'Supported me through a difficult life transition. I now have a plan and direction.',
          author: 'K., client'
        },
        {
          text: 'Family sessions helped us communicate more meaningfully.',
          author: 'The P. family'
        },
        {
          text: 'I regained my confidence and learned practical tools for anxiety.',
          author: 'M., client'
        }
      ]
    },


    contact: {
      title: 'Get in Touch',
      intro: 'Prefer a quick message or call? Use the options here—no account or portal needed.',
      emailLabel: 'Email',
      phoneLabel: 'Phone',
      teleLabel: 'Secure Telehealth Available',
      btnEmail: 'Email me',
      btnCall: 'Call',
      btnCopy: 'Copy email',
      btnBook: 'Book a 15‑min consult',
      expectTitle: 'What to expect',
      expectList: [
        'Reply within 1 business day',
        'Confidential, judgment‑free space',
        'Telehealth available',
        'Sliding scale spots as available'
      ]
    },

    footer: {
      links: {services: 'Services', about: 'About', testimonials: 'Testimonials', contact: 'Contact'},
      legal1: 'For emergencies, call your local emergency number or visit the nearest ER.',
      legal2: 'Not a substitute for crisis services.'
    }
  }
}

function get(obj, path) {
  return path.split('.').reduce((o, k) => (o && o[k] !== undefined ? o[k] : undefined), obj)
}

export function I18nProvider({children}) {
  const [lang, setLang] = useState(() => localStorage.getItem('lang') || 'el')

  useEffect(() => {
    localStorage.setItem('lang', lang)
    document.documentElement.lang = lang
  }, [lang])

  const value = useMemo(() => {
    const t = (key) => {
      const val = get(dict[lang], key)
      return val !== undefined ? val : key
    }
    return {lang, setLang, t}
  }, [lang])

  return <I18nContext.Provider value={value}>{children}</I18nContext.Provider>
}

export function useI18n() {
  return useContext(I18nContext)
}
