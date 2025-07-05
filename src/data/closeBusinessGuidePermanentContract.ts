export const closeBusinessGuide = {
  author: {
    name: "Sofia",
    title: "Legal Editorial Manager",
    date: "2023",
    image: "/images/home/Ines.png",
    bio: "With extensive experience in business law and company dissolution procedures, Sofia has compiled key steps and legal requirements for closing a business. After reviewing the various paths, she joined Captain Contrat to offer you reliable and accessible content.",
  },
  sections: [
    {
      id: "mandatory_clauses",
      title: "What are the mandatory clauses of a permanent contract?",
      content: [
        "Here are the elements that must appear on a permanent contract:",
        "• The position occupied by the employee",
        "• The duration and conditions for renewal of the trial period , if applicable (the trial period is not obligatory)",
        "• The employee's professional qualifications",
        "• The notice period in the event of the employee's departure",
      ],
    },

    {
      id: "template_to_write_contract",
      title: "Can I use a template to write a permanent contract?",
      content: [
        "Starting from a contract model unfortunately involves several risks",
        "• The standard model may be poorly adapted and not reflect the specificities of the job well; in particular, it does not include any special clause. ",
        "• The chosen model may simply not comply with the labor code , you have no guarantee in terms of legal security.",
        "• Finally, the model may not comply with your company's collective agreement, the specifics of which are generally not included.",
      ],
    },

    {
      id: "types_of_contract",
      title: "Are there different types of permanent contracts? ",
      content: [
        "Yes, there are different types of permanent contracts that you can choose to offer depending on your needs and situation:",
        "• The temporary CDI which allows a temporary worker to secure their career path with longer assignments.",
        "• The intermittent permanent contract allows an employee to alternate between working and non-working periods. As a company, it responds to fluctuating business needs over the years.",
        "• The CDI construction site contract , also called mission or operation contract, is a contract by which the employer hires an employee with a view to assigning them to carry out work whose end date is not known.",
      ],
    },

    // this is multi stepper data
    {
      id: "documents_to_draft_contract",
      title:
        "What is the list of documents required to draft a permanent employment contract?",
      steps: [
        {
          number: 1,
          title:
            "Most often, the employee will have to provide the employer with : ",
          description:
            "There are no legal obligations regarding the list of documents to be provided for a permanent employment contract .",
          list: [
            "A copy of both sides of a valid identity document (national identity card or passport, residence permit or work permit);",
            "A copy of the Social Security affiliation certificate or photocopy of the front and back of the Vitale card;",
            "A bank account statement (RIB) for salary payments;",
            "Proof of transport.",
          ],
        },
        {
          number: 2,
          title: "The employer must transmit : ",
          description: "",
          list: [
            "A copy of the employment contract ;",
            "An employee savings booklet , if applicable;",
            "An information notice concerning the texts of conventions applicable within the company.",
          ],
        },
      ],
    },

    {
      id: "trial_period",
      title:
        "How long is the trial period before the final conclusion of a permanent contract?",
      content: [
        "According to Article L. 1221-10 of the Labor Code, an indefinite-term employment contract may include a trial period, the maximum duration of which is:",
      ],
      list: [
        "For workers and employees, two months ;",
        "For supervisors and technicians, three months ;",
        "For executives, four months .",
      ],
    },
    {
      id: "notice_period",
      title: "Is it possible to renew a trial period in a permanent contract?",
      content: [
        "The trial period may be renewed once if a sectoral agreement so provides. The possibility of renewal must be included in the employment contract. Article L. 1221-21 of the French Labor Code specifies that the duration of the trial period, including any renewal, must not exceed : ",
      ],
      list: [
        "Four months for workers and employees;",
        "Six months for supervisors and technicians;",
        "Eight months for executives.",
      ],
    },
    // this is multi stepper data
    {
      id: "advantages",
      title: "What are the advantages of a permanent contract?",
      content: [
        "Both the employer and the employee benefit from stability and legal security with a permanent contract. Here is a list of benefits: ",
      ],
      steps: [
        {
          number: 1,
          title: "For the employer : ",
          description: "",
          list: [
            "The cost : for a fixed-term contract or temporary employment contract, precariousness bonuses must be paid.",
            "The employee is subject to an obligation of loyalty . A non-competition clause may be included in the employment contract.",
          ],
        },
        {
          number: 2,
          title: "For the employee : ",
          description: "",
          list: [
            "The CDI provides the employee with a fixed and regular income in advance , allowing them to take out bank loans.",
            "He has paid leave (30 days minimum per year).",
          ],
        },
      ],
    },
    // this is multi stepper data
    {
      id: "disadvantages",
      title: "What are the disadvantages of a permanent contract?",
      content: ["The CDI imposes a long-term commitment for both parties."],
      steps: [
        {
          number: 1,
          title: "For the employer : ",
          description: "",
          list: [
            "He is committed to a long-term working relationship. Risks may arise: poor recruitment, etc.",
          ],
        },
        {
          number: 2,
          title: "For the employee : ",
          description: "",
          list: [
            "The trial period, the duration of which varies depending on the position held.",
            "To terminate the contract unilaterally, the employee must resign. They will not receive unemployment benefits.",
            "He can request a mutual termination from his employer, but the latter can refuse.",
          ],
        },
      ],
    },

    {
      id: "part_time_contract",
      title: "Does a part-time permanent contract exist?",
      content: [
        "The part-time permanent contract is very similar to the full-time permanent contract in terms of the level of remuneration and the guarantees it offers (paid leave, sick leave, etc.). ",
        "In principle, a part-time permanent contract does not allow you to work overtime , but the law does allow for what are called additional hours. The difference is that this extra hour worked will be billed to you at the same rate as a normal hour.",
        "This type of contract allows you to regulate the duration of working time according to the needs of the company .",
        'So-called "part-time" employees must work less than the legal working time, i.e. less than 35 hours per week . Working hours may vary by agreement depending on the sector or company, for monthly working hours. For annual working hours, a part-time worker is someone who generally works less than 1607 hours, or less than the duration set by agreement for the sector or company.',
      ],
    },

    // this is multi stepper data
    {
      id: "termination",
      title: "What are the different cases of possible termination of the CDI?",
      content: ["The permanent contract (CDI) can be terminated at any time."],
      steps: [
        {
          number: 1,
          title: "Termination at the employer's initiative  ",
          description: "",
          list: [
            "During the trial period, without any particular reason;",
            "After the trial period, dismissals for personal or economic reasons;",
            "Compulsory retirement.",
          ],
        },
        {
          number: 2,
          title: "Termination at the employee's initiative ",
          description: "",
          list: [
            "During the trial period, without any particular reason;",
            "Resignation;",
            "Voluntary retirement;",
            "Judicial termination (termination requested from the industrial tribunal);",
            "Acknowledgment (method of termination of the contract by court decision).",
          ],
        },
        {
          number: 3,
          title: "Breakup by mutual agreement   ",
          description: "",
          list: ["Conventional termination."],
        },
      ],
    },
  ],
};
