export type BlogCategory = 
  | "Business Creation" 
  | "Legal" 
  | "Management" 
  | "Taxation" 
  | "Company Structure";

export interface BlogArticle {
  id: string;
  image: string;
  title: string;
  description: string;
  updatedDate: string;
  readingTime: number;
  slug: string;
  tag: string;
  category: BlogCategory;
  author: {
    name: string;
    title: string;
    image: string;
    bio: string;
    linkedProfile?: string;
  };
  proofreader?: {
    name: string;
    title: string;
  };
  content: string; // HTML content with Tailwind classes
  summaryItems: {
    id: string;
    text: string;
  }[];
  cta: {
    title: string;
    description: string;
    buttonText: string;
    buttonUrl: string;
    bgColor?: string;
  };
}

export const blogArticles: BlogArticle[] = [
  {
    id: "1",
    image: "https://images.unsplash.com/photo-1586282391129-76a6df230234",
    title: "SASU: mandatory registers",
    description: "Are you creating a SASU (Limited Shared Enterprise)? Find out which registers are required for this legal structure.",
    updatedDate: "January 19, 2024",
    readingTime: 5,
    slug: "mandatory-sasu-registers-guide",
    tag: "Featured Article",
    category: "Company Structure",
    author: {
      name: "Thomas Dupont",
      title: "Co-founder of Captain Contrat, Graduate of HEC Paris",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
      bio: "With a Master's degree in Business Law from the University of Paris 1 Panthéon-Sorbonne, Thomas has worked in law firms and legal publishing houses. After developing his writing and editorial skills, he joined a Parisian content production agency as a Senior Content Manager, then Account Manager Director. Today, he is the Content Manager."
    },
    proofreader: {
      name: "Pierre-Florian Dumez",
      title: "Law graduate"
    },
    cta: {
      title: "Do you need to close your EURL ?",
      description: "Delegate your procedures and benefit from personalized support from one of our partner lawyers",
      buttonText: "Close my EURL",
      buttonUrl: "/gestion-des-litiges/fermer-une-societe",
      bgColor: "bg-orange-50"
    },
    summaryItems: [
      { id: "what-are", text: "What are the mandatory registers for the SASU?" },
      { id: "register-beneficial-owners", text: "The register of beneficial owners" },
      { id: "register-securities", text: "The register of securities movements" },
      { id: "register-decisions", text: "The register of decisions of the sole shareholder" },
      { id: "risks", text: "What are the risks if one of the mandatory registers is missing?" },
      { id: "summary", text: "In summary" }
    ],
    content: `
      <section id="what-are" class="scroll-mt-24">
        <h2 class="text-2xl lg:text-3xl font-bold text-tertiary mb-6">What are the mandatory registers for the SASU?</h2>
        
        <p class="mb-4">You want to create a <strong>single-member simplified joint-stock company</strong> - a SASU. The creation and operation of this type of company means compliance with certain mandatory formalities.</p>
        
        <p class="mb-4">A SASU is a simplified version of an SAS (Simplified Joint Stock Company). It's a flexible legal status with many advantages. By becoming the sole shareholder of a SASU (limited joint-stock company), you have the opportunity to be both an employee and a president. This will give you complete freedom to manage your business as you wish.</p>
        
        <p class="mb-4">However, even if you are the sole manager of your SASU, the law requires you to keep certain records. In this article, Captain Contrat explains which records you must keep and the penalties you face if you fail to comply.</p>
        
        <p class="mb-6">Certain registers are common to all forms of company. However, there are <strong>mandatory registers for a SASU</strong>. These legal registers must be kept within the framework of a SASU:</p>
        
        <ul class="list-disc pl-8 mb-8 space-y-1 text-gray-700">
          <li>the register of beneficial owners;</li>
          <li>the register of the movements;</li>
          <li>the register of decisions of the sole shareholder.</li>
        </ul>
      </section>
      
      <section id="register-beneficial-owners" class="scroll-mt-24 mt-12">
        <h3 class="text-xl lg:text-2xl font-bold text-tertiary mb-4">The register of beneficial owners</h3>
        
        <p class="mb-4">Since the Sapin II law of August 2, 2017, it is mandatory to keep the register of beneficial owners. This obligation applies to all forms of company, regardless of effective control of a company. It consists of identifying all natural persons who exercise effective control of the company.</p>
        
        <p class="mb-4">This registration must be made by persons holding more than 25% of the voting rights or capital of a company.</p>
        
        <p class="mb-6">In a SASU, there is a single partner who can also act as president of the SASU. This partner therefore holds 100% of the company's capital. However, the obligation to keep a register of beneficial owners applies to the SASU.</p>
        
        <p class="mb-4">The register of beneficial owners must be filed with the commercial court. The information to be filled in is that at the time of creation of the SASU, either by mail or online. The register must include:</p>
        
        <ul class="list-disc pl-8 mb-8 space-y-1 text-gray-700">
          <li>information about the company: its date of creation, its registered office, the amount of share capital, its corporate name, its identification number;</li>
          <li>information regarding the active beneficiaries: for the SASU, this refers to the sole shareholder, or president.</li>
        </ul>
      </section>
      
      <section id="register-securities" class="scroll-mt-24 mt-12">
        <h3 class="text-xl lg:text-2xl font-bold text-tertiary mb-4">The register of securities movements</h3>
        
        <p class="mb-4">A SASU must keep a <strong>register of securities movements</strong>. This register records all transactions that affect the shares in the SASU's share capital, such as transfers of shares and contributions of shares.</p>
        
        <p class="mb-4">The register must include:</p>
        
        <ul class="list-disc pl-8 mb-8 space-y-1 text-gray-700">
          <li>the nature of the operation carried out by the transaction;</li>
          <li>the date of the operation;</li>
          <li>the identity of the new and former holder of the SASU shares;</li>
          <li>the number of shares that are affected.</li>
        </ul>
        
        <div class="bg-yellow-50 border-l-4 border-yellow-400 p-4 my-8 rounded-r">
          <div class="flex">
            <div class="flex-shrink-0">
              <svg class="h-5 w-5 text-yellow-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                <path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2h-1V9a1 1 0 00-1-1z" clip-rule="evenodd" />
              </svg>
            </div>
            <div class="ml-3">
              <p class="text-sm text-yellow-800">
                Please note: <br>
                The record movement register will prove particularly useful if you decide to welcome new partners or if transferring your SASU into an SAS.
              </p>
            </div>
          </div>
        </div>
      </section>
      
      <section id="register-decisions" class="scroll-mt-24 mt-12">
        <h3 class="text-xl lg:text-2xl font-bold text-tertiary mb-4">The register of decisions of the sole shareholder</h3>
        
        <p class="mb-4">The SASU is composed of a <strong>single partner</strong> who alone makes decisions relating to the company. Organizing and holding a general meeting is therefore not necessary.</p>
        
        <p class="mb-4">The sole partner of the SASU must only record in a register of decisions all decisions affecting the company. These decisions may concern:</p>
        
        <ul class="list-disc pl-8 mb-8 space-y-1 text-gray-700">
          <li>the modification of the SASU statutes;</li>
          <li>the approval of the annual accounts;</li>
          <li>the dissolution of SASU;</li>
          <li>the liquidation of the SASU.</li>
        </ul>
        
        <p class="mb-6">Each deliberation of the sole shareholder is transcribed in a decision report, which is itself recorded in this register of decisions of the sole shareholder. This is a binder containing sheets which are numbered and initialed by the order of the commercial court or by the mayor of the municipality where the SASU is located.</p>
        
        <p class="mb-4">In parallel with these legal registers, the sole shareholder must keep accounting registers:</p>
        
        <ul class="list-disc pl-8 mb-8 space-y-1 text-gray-700">
          <li><strong>The journal</strong>: records all transactions that have an impact on the SASU's assets. This includes all of the SASU's accounting entries.</li>
          <li><strong>The ledger</strong>: records the same movements, but classifies the information from the accounting plan established by the SASU.</li>
        </ul>
        
        <p class="mb-6">However, the employment register is only required if the SASU has employees. This register is mandatory as soon as the SASU hires an employee. Sometimes, it must also keep a register of weekly rest periods, when the activity of the SASU requires it (in particular when employees work on Sundays).</p>
        
        <div class="bg-yellow-50 border-l-4 border-yellow-400 p-4 my-8 rounded-r">
          <div class="flex">
            <div class="flex-shrink-0">
              <svg class="h-5 w-5 text-yellow-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                <path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2h-1V9a1 1 0 00-1-1z" clip-rule="evenodd" />
              </svg>
            </div>
            <div class="ml-3">
              <p class="text-sm text-yellow-800">
                Please note: <br>
                Depending on your business activity, you may be required to keep specific records. For example, if your SASU operates in the construction industry, you must keep a construction site register that all documents relating to the progress of the construction site.
              </p>
            </div>
          </div>
        </div>
      </section>
      
      <section id="risks" class="scroll-mt-24 mt-12">
        <h2 class="text-2xl lg:text-3xl font-bold text-tertiary mb-6">What are the risks if one of the mandatory registers is missing?</h2>
        
        <p class="mb-4">The SASU is exposed to risks if one of these mandatory registers is not kept.</p>
        
        <p class="mb-6">In the absence of declaration of a <strong>register of beneficial owners</strong>, or if the information in the register is incomplete, the sole shareholder may be sentenced to a 6 months of imprisonment and a fine of €7,500.</p>
        
        <p class="mb-6">If the sole shareholder of the SASU does not keep a <strong>register of securities movements</strong>, this does not necessarily expose him to sanctions. On the other hand, as each movement of shares must be transcribed, in absence, this can be challenged by any interested party.</p>
        
        <p class="mb-6">If the sole shareholder of the SASU does not keep the <strong>register of decisions</strong>, this does not expose him to legal sanctions. On the other hand, any person having knowledge of a decision not recorded in a register may request its recording. In the event of refusal by the sole shareholder, the court may order it. The return to comply with the obligation to keep this register may be considered an embarrassment on the part of the sole shareholder - this may may thus be personally liable.</p>
        
        <p class="mb-6">With regard to accounting obligations, any missing, inaccurate or fictitious entry exposes the person responsible to a fine of up to €9,000 and a prison sentence of five years.</p>
      </section>
      
      <!-- Image section -->
      <div class="my-10">
        <img 
          src="https://cdn.pixabay.com/photo/2017/05/19/12/40/beard-2326422_640.jpg" 
          alt="SASU registers diagram showing the relationship between different registers" 
          class="w-full h-auto max-h-[400px] rounded-lg shadow-md"
        />
        <p class="text-sm text-gray-500 mt-2 text-center">Diagram illustrating the mandatory registers for a SASU</p>
      </div>
      
      <!-- Summary section -->
      <section id="summary" class="scroll-mt-24 mt-12 bg-gray-50 p-6 rounded-lg">
        <div class="flex items-center mb-4">
          <svg class="h-6 w-6 mr-2 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
          </svg>
          <h2 class="text-2xl lg:text-3xl font-bold text-tertiary">In summary</h2>
        </div>
        
        <ul class="list-disc pl-6 space-y-2">
          <li>The sole shareholder of a SASU is required to keep certain types of registers such as the register of beneficial owners, the register of securities movements and the register of decisions of the sole shareholder.</li>
          <li>Failure to comply with this obligation exposes you to sanctions.</li>
          <li>It is advisable to keep these records conscientiously, as they could prove very useful if you decide to transform your SASU into an SAS or if you want to sell it to a third party.</li>
        </ul>
      </section>
      
      
    `
  },
  {
    id: "2",
    image: "https://cdn.pixabay.com/photo/2017/05/19/12/40/beard-2326422_640.jpg",
    title: "How does an SAS work?",
    description: "Want to know more about how a simplified joint-stock company (SAS) works? Management, decision-making, and shareholder rights: Captain Contrat tells you everything.",
    updatedDate: "January 5, 2024",
    readingTime: 5,
    slug: "how-does-sas-work",
    tag: "Company Guide",
    category: "Business Creation",
    author: {
      name: "Marie Laurent",
      title: "Legal Expert at Captain Contrat",
      image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
      bio: "Legal expert at Captain Contrat, passionate about entrepreneurship and legal compliance."
    },
    cta: {
      title: "Need help creating your SAS?",
      description: "Get personalized support from our legal experts to create your company with confidence",
      buttonText: "Create my SAS",
      buttonUrl: "/creer-entreprise/creation-sas-en-ligne",
      bgColor: "bg-blue-50"
    },
    summaryItems: [
      { id: "what-is-sas", text: "What is a Simplified Joint-Stock Company (SAS)?" },
      { id: "advantages", text: "Advantages of an SAS" },
      { id: "summary", text: "In summary" }
    ],
    content: `
      <section id="what-is-sas" class="scroll-mt-24">
        <h2 class="text-2xl lg:text-3xl font-bold text-tertiary mb-4">What is a Simplified Joint-Stock Company (SAS)?</h2>
        
        <p class="mb-4">A Simplified Joint-Stock Company (SAS) is a flexible form of commercial company that was created in 1994 to encourage entrepreneurship in France. It has become one of the most popular legal structures for businesses due to its contractual freedom and limited liability.</p>
        
        <p class="mb-4">The SAS is characterized by great freedom in terms of organization and operation. It requires a minimum capital of 1 euro and can be constituted with a single shareholder (in which case it becomes a SASU - Simplified Joint-Stock Company with a Single Shareholder).</p>
      </section>
      
      <section id="advantages" class="scroll-mt-24 mt-12">
        <h2 class="text-2xl lg:text-3xl font-bold text-tertiary mb-4">Advantages of an SAS</h2>
        
        <p class="mb-4">The SAS offers numerous advantages for entrepreneurs:</p>
        
        <ul class="list-disc pl-5 space-y-2 text-gray-700">
          <li>Limited liability to contributions</li>
          <li>Flexibility in organization and operation</li>
          <li>Freedom to determine the amount of share capital</li>
          <li>Possibility of having a single shareholder</li>
          <li>Attractive tax options</li>
        </ul>
      </section>
      
      <!-- Summary section -->
      <section id="summary" class="scroll-mt-24 mt-12 bg-gray-50 p-6 rounded-lg">
        <h2 class="text-2xl lg:text-3xl font-bold text-tertiary mb-4">In summary</h2>
        
        <ul class="list-disc pl-6 space-y-2">
          <li>An SAS offers great flexibility in terms of organization and operation</li>
          <li>The minimum capital required is only 1 euro</li>
          <li>It can be formed with a single shareholder (SASU)</li>
        </ul>
      </section>
    `
  },
  {
    id: "3",
    image: "https://images.unsplash.com/photo-1586282391129-76a6df230234",
    title: "Dissolution of an EURL: what procedure?",
    description: "The dissolution of an EURL is subject to a strict procedure: minutes, dissolution form, publication in the legal notices journal, closing of accounts, etc. Discover the steps to dissolve your EURL",
    updatedDate: "December 28, 2023",
    readingTime: 3,
    slug: "eurl-dissolution-procedure",
    tag: "Legal Guide",
    category: "Legal",
    author: {
      name: "Philippe Martin",
      title: "Senior Legal Advisor at Captain Contrat",
      image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
      bio: "Senior Legal Advisor at Captain Contrat, experienced in company law and litigation."
    },
    cta: {
      title: "Do you need to close your EURL ?",
      description: "Delegate your procedures and benefit from personalized support from one of our partner lawyers",
      buttonText: "Close my EURL",
      buttonUrl: "/gestion-des-litiges/fermer-une-societe",
      bgColor: "bg-orange-50"
    },
    summaryItems: [
      { id: "what-is-dissolution", text: "Dissolution of the EURL: what is it?" },
      { id: "grounds-for-dissolution", text: "What are the grounds for dissolving an EURL?" },
      { id: "summary", text: "In summary" }
    ],
    content: `
      <section id="what-is-dissolution" class="scroll-mt-24">
        <h2 class="text-2xl lg:text-3xl font-bold text-tertiary mb-4">Dissolution of the EURL: what is it?</h2>
        
        <p class="mb-4">The dissolution of the EURL corresponds to the definition end of the company's activity. Dissolution is often confused with liquidation. However, these are two distinct phases: dissolution is the first step, followed by liquidation. If the EURL encounters operational difficulties of any nature, it can be dissolved given the legal circumstances.</p>
      </section>
      
      <section id="grounds-for-dissolution" class="scroll-mt-24 mt-12">
        <h2 class="text-2xl lg:text-3xl font-bold text-tertiary mb-4">What are the grounds for dissolving an EURL?</h2>
        
        <p class="mb-4">An EURL (Single Member Limited Liability Company) can only be dissolved on certain grounds, strictly listed by law:</p>
        
        <ul class="list-disc pl-5 space-y-2 text-gray-700">
          <li>Expiration of the duration for which it was constituted;</li>
          <li>Realization or extinction of the corporate purpose (the object);</li>
          <li>Cancellation of the partnership agreement;</li>
          <li>Decision of the sole partner;</li>
          <li>Judicial dissolution for just cause;</li>
          <li>Any other cause provided for by the statutes.</li>
        </ul>
      </section>
      
      <!-- Summary section -->
      <section id="summary" class="scroll-mt-24 mt-12 bg-gray-50 p-6 rounded-lg">
        <h2 class="text-2xl lg:text-3xl font-bold text-tertiary mb-4">In summary</h2>
        
        <ul class="list-disc pl-6 space-y-2">
          <li>Dissolution is the first step in closing an EURL, followed by liquidation</li>
          <li>There are specific legal grounds for dissolving an EURL</li>
          <li>The decision must be documented and published</li>
        </ul>
      </section>
    `
  },
  {
    id: "4",
    image: "https://images.unsplash.com/photo-1554224155-6726b3ff858f",
    title: "Reduction of share capital: what taxation?",
    description: "The taxation of a capital reduction depends on the nature of the reduction (reduction of securities or their value or repurchase by the company).",
    updatedDate: "February 10, 2025",
    readingTime: 4,
    slug: "share-capital-reduction-taxation",
    tag: "Tax Guide",
    category: "Taxation",
    author: {
      name: "Sophie Dubois",
      title: "Tax Specialist at Captain Contrat",
      image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
      bio: "Tax specialist at Captain Contrat, specialized in corporate taxation and tax optimization."
    },
    cta: {
      title: "Need tax advice for your business?",
      description: "Get expert guidance on optimizing your company's tax strategy",
      buttonText: "Contact our experts",
      buttonUrl: "/expertise-comptable",
      bgColor: "bg-green-50"
    },
    summaryItems: [
      { id: "what-is-capital-reduction", text: "What is a capital reduction?" },
      { id: "tax-implications", text: "Tax implications of capital reduction" },
      { id: "summary", text: "In summary" }
    ],
    content: `
      <section id="what-is-capital-reduction" class="scroll-mt-24">
        <h2 class="text-2xl font-bold text-tertiary mb-4">What is a capital reduction?</h2>
        
        <p class="mb-4">A capital reduction is an operation that consists of reducing the amount of a company's share capital. This can be done in several ways: by reducing the nominal value of shares, by reducing the number of shares, or by repurchasing shares by the company itself.</p>
        
        <p class="mb-4">Capital reduction can be motivated by various reasons: offsetting losses, returning excess capital to shareholders, or restructuring the company's finances.</p>
      </section>
      
      <section id="tax-implications" class="scroll-mt-24 mt-12">
        <h2 class="text-2xl font-bold text-tertiary mb-4">Tax implications of capital reduction</h2>
        
        <p class="mb-4">The tax treatment of a capital reduction depends on its nature:</p>
        
        <ul class="list-disc pl-5 space-y-2 text-gray-700">
          <li><strong>Reduction by cancellation of securities:</strong> Generally not taxable for the company</li>
          <li><strong>Reduction by repurchase of shares:</strong> May be subject to capital gains tax for the shareholders</li>
          <li><strong>Reduction for losses:</strong> No immediate tax implications but impacts future tax calculations</li>
        </ul>
      </section>
      
      <!-- Summary section -->
      <section id="summary" class="scroll-mt-24 mt-12 bg-gray-50 p-6 rounded-lg">
        <h2 class="text-2xl font-bold text-tertiary mb-4">In summary</h2>
        
        <ul class="list-disc pl-6 space-y-2">
          <li>Capital reduction can be done by reducing share value or number</li>
          <li>Different tax treatments apply depending on the method used</li>
          <li>Proper documentation and legal procedures must be followed</li>
        </ul>
      </section>
    `
  },
  {
    id: "5",
    image: "https://images.unsplash.com/photo-1450101499163-c8848c66ca85",
    title: "SARL vs SAS: which legal form to choose?",
    description: "Choosing between SARL and SAS for your business? Discover the key differences and make the right choice for your entrepreneurial project.",
    updatedDate: "March 15, 2024",
    readingTime: 6,
    slug: "sarl-vs-sas-comparison",
    tag: "Business Guide",
    category: "Business Creation",
    author: {
      name: "Jean Dupont",
      title: "Business Formation Specialist at Captain Contrat",
      image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
      bio: "Business formation specialist at Captain Contrat with over 10 years of experience helping entrepreneurs choose the right legal structure for their business."
    },
    cta: {
      title: "Need help choosing your legal form?",
      description: "Our experts can guide you through the process of selecting the best legal structure for your business",
      buttonText: "Get personalized advice",
      buttonUrl: "/creer-entreprise/choisir-la-forme-juridique",
      bgColor: "bg-blue-50"
    },
    summaryItems: [
      { id: "sarl-overview", text: "SARL: Overview and characteristics" },
      { id: "sas-overview", text: "SAS: Overview and characteristics" },
      { id: "comparison", text: "SARL vs SAS: Key differences" },
      { id: "summary", text: "In summary" }
    ],
    content: `
      <section id="sarl-overview" class="scroll-mt-24">
        <h2 class="text-2xl lg:text-3xl font-bold text-tertiary mb-4">SARL: Overview and characteristics</h2>
        
        <p class="mb-4">The SARL (Société à Responsabilité Limitée) is one of the most common legal forms for small and medium-sized businesses in France. It offers limited liability protection for its partners, who are only responsible for the company's debts up to the amount of their contributions.</p>
        
        <p class="mb-4">Key characteristics of the SARL include:</p>
        
        <ul class="list-disc pl-5 space-y-2 text-gray-700">
          <li>Minimum capital: 1€</li>
          <li>Number of partners: Between 1 (EURL) and 100</li>
          <li>Management: One or more managers (gérants)</li>
          <li>Social status of the manager: Employee or self-employed depending on the situation</li>
          <li>Decision-making: Majority voting for ordinary decisions, qualified majority for extraordinary decisions</li>
        </ul>
      </section>
      
      <section id="sas-overview" class="scroll-mt-24 mt-12">
        <h2 class="text-2xl lg:text-3xl font-bold text-tertiary mb-4">SAS: Overview and characteristics</h2>
        
        <p class="mb-4">The SAS (Société par Actions Simplifiée) is a more flexible legal form that has gained popularity in recent years. It offers significant freedom in terms of organization and operation.</p>
        
        <p class="mb-4">Key characteristics of the SAS include:</p>
        
        <ul class="list-disc pl-5 space-y-2 text-gray-700">
          <li>Minimum capital: 1€</li>
          <li>Number of shareholders: At least 1 (SASU) with no maximum</li>
          <li>Management: President and possibly a management board</li>
          <li>Social status of the president: Similar to an employee for social security</li>
          <li>Decision-making: Freely determined in the articles of association</li>
        </ul>
      </section>
      
      <section id="comparison" class="scroll-mt-24 mt-12">
        <h2 class="text-2xl lg:text-3xl font-bold text-tertiary mb-4">SARL vs SAS: Key differences</h2>
        
        <p class="mb-4">When choosing between SARL and SAS, consider these key differences:</p>
        
        <ul class="list-disc pl-5 space-y-2 text-gray-700">
          <li><strong>Flexibility:</strong> The SAS offers greater flexibility in terms of organization and operation</li>
          <li><strong>Social status:</strong> Different social security regimes for managers/presidents</li>
          <li><strong>Taxation:</strong> Both can opt for corporate tax or income tax (under certain conditions)</li>
          <li><strong>Capital:</strong> Easier to raise capital with an SAS</li>
          <li><strong>Image:</strong> The SAS is often perceived as more modern and attractive to investors</li>
        </ul>
      </section>
      
      <!-- Summary section -->
      <section id="summary" class="scroll-mt-24 mt-12 bg-gray-50 p-6 rounded-lg">
        <h2 class="text-2xl lg:text-3xl font-bold text-tertiary mb-4">In summary</h2>
        
        <ul class="list-disc pl-6 space-y-2">
          <li>Choose SARL for a small business with few partners and a stable structure</li>
          <li>Choose SAS for a growing business that may need to raise funds or with complex governance</li>
          <li>Both forms offer limited liability protection and similar minimum capital requirements</li>
        </ul>
      </section>
    `
  },
  {
    id: "6",
    image: "https://images.unsplash.com/photo-1551836022-d5d88e9218df",
    title: "How to register a trademark in France?",
    description: "Protect your brand by registering your trademark with the INPI. Follow our step-by-step guide to secure your intellectual property rights.",
    updatedDate: "April 2, 2024",
    readingTime: 7,
    slug: "trademark-registration-france-guide",
    tag: "Legal Protection",
    category: "Legal",
    author: {
      name: "Claire Martin",
      title: "Intellectual Property Specialist at Captain Contrat",
      image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
      bio: "Intellectual Property Specialist at Captain Contrat with expertise in trademark law and brand protection strategies for businesses of all sizes."
    },
    cta: {
      title: "Ready to protect your brand?",
      description: "Our experts can help you register your trademark and secure your intellectual property",
      buttonText: "Register my trademark",
      buttonUrl: "/proteger-sa-societe/depot-de-marque-inpi-en-ligne",
      bgColor: "bg-blue-50"
    },
    summaryItems: [
      { id: "why-register", text: "Why register a trademark?" },
      { id: "registration-process", text: "The trademark registration process" },
      { id: "costs", text: "Costs and timeframes" },
      { id: "summary", text: "In summary" }
    ],
    content: `
      <section id="why-register" class="scroll-mt-24">
        <h2 class="text-2xl lg:text-3xl font-bold text-tertiary mb-4">Why register a trademark?</h2>
        
        <p class="mb-4">Registering a trademark gives you exclusive rights to use your brand name, logo, or slogan in connection with the goods or services you offer. This legal protection prevents others from using similar marks that might confuse consumers.</p>
        
        <p class="mb-4">Key benefits of trademark registration include:</p>
        
        <ul class="list-disc pl-5 space-y-2 text-gray-700">
          <li>Legal protection throughout France (and potentially the EU or internationally)</li>
          <li>Exclusive right to use the trademark for the registered goods and services</li>
          <li>Right to take legal action against counterfeiters</li>
          <li>Ability to license or sell your trademark</li>
          <li>Enhanced credibility and brand value</li>
        </ul>
      </section>
      
      <section id="registration-process" class="scroll-mt-24 mt-12">
        <h2 class="text-2xl lg:text-3xl font-bold text-tertiary mb-4">The trademark registration process</h2>
        
        <p class="mb-4">Registering a trademark in France involves several steps:</p>
        
        <ol class="list-decimal pl-5 space-y-2 text-gray-700">
          <li><strong>Prior art search:</strong> Check if similar trademarks already exist</li>
          <li><strong>Preparation of the application:</strong> Define the goods and services covered</li>
          <li><strong>Filing with INPI:</strong> Submit your application to the French National Institute of Industrial Property</li>
          <li><strong>Examination:</strong> INPI reviews your application for compliance</li>
          <li><strong>Publication:</strong> Your application is published in the Official Bulletin</li>
          <li><strong>Opposition period:</strong> Third parties have 2 months to oppose your registration</li>
          <li><strong>Registration:</strong> If no opposition or after resolution, your trademark is registered</li>
        </ol>
      </section>
      
      <section id="costs" class="scroll-mt-24 mt-12">
        <h2 class="text-2xl lg:text-3xl font-bold text-tertiary mb-4">Costs and timeframes</h2>
        
        <p class="mb-4">The basic fee for filing a trademark application with INPI is €190 for up to 3 classes of goods or services. Each additional class costs €40.</p>
        
        <p class="mb-4">The registration process typically takes 5-6 months if there are no objections or oppositions. Your trademark protection lasts for 10 years and can be renewed indefinitely for additional 10-year periods.</p>
      </section>
      
      <!-- Summary section -->
      <section id="summary" class="scroll-mt-24 mt-12 bg-gray-50 p-6 rounded-lg">
        <h2 class="text-2xl lg:text-3xl font-bold text-tertiary mb-4">In summary</h2>
        
        <ul class="list-disc pl-6 space-y-2">
          <li>Trademark registration provides exclusive rights and legal protection for your brand</li>
          <li>The process involves several steps including prior art search and examination</li>
          <li>Registration costs start at €190 and protection lasts for 10 years</li>
          <li>Professional assistance can help navigate the process and increase chances of successful registration</li>
        </ul>
      </section>
    `
  }
]; 