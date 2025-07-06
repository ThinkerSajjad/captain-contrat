"use client";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { MessageSquare } from "lucide-react";

const faqs = [
  {
    question: "What is a SASU?",
    answer:
      "The SASU, or Société par Actions Simplifiée Unipersonnelle, is a simplified joint-stock company (SAS) formed by a single shareholder. The sole shareholder is a natural or legal person who holds all of the shares. They manage the company as president or may decide to entrust the presidency to a third party. The sole shareholder enjoys considerable statutory freedom to set the amount of share capital and the company&apos;s organizational rules. ",
    icon: <MessageSquare className="h-5 w-5 text-red-500" />,
  },
  {
    question: "What are the advantages of a SASU?",
    answer: (
      <div className="space-y-4">
        <ul className="list-disc pl-5 space-y-2">
          <li>
            The partner&apos;s liability is limited to the amount of his
            contributions to the share capital;
          </li>
          <li>
            The SASU is subject to corporate tax by default, but the sole
            shareholder can opt for income tax for a maximum of 5 years.
          </li>
          <li>
            The SASU is scalable: to create an SAS with other partners, it will
            not be necessary to transform the form of the company;
          </li>
          <li>
            The creation of a SASU offers greater statutory freedom . It is
            easier to decide what you want to include in its statutes, and in
            particular all the rules delimiting the decision-making of the sole
            shareholder, the increase in share capital, the possibility of new
            shareholders joining, etc.
          </li>
        </ul>
      </div>
    ),
  },
  {
    question: "How much does it cost to create a SASU online?",
    answer: (
      <div className="space-y-4">
        <p>To expect :</p>
        <p>
          Costs <strong>related to legal and administrative formalities</strong>
          :
        </p>
        <ul className="list-disc pl-5 space-y-2">
          <li>The costs of publishing a legal notice (around €200);</li>
          <li>
            Submitting your registration file to the Trade and Companies
            Register (around €40);
          </li>
          <li>
            Registration in the register of beneficial owners (approximately
            €25).
          </li>
        </ul>
        <p>
          The cost of these steps may vary, in particular if you decide to have
          a lawyer assist you in drafting your articles of association.
        </p>
        <p>
          In addition to these <strong>incompressible costs</strong> , you will
          also need to anticipate the costs linked to protecting your brand,
          drafting your general terms and conditions and legal notices, and
          drafting your first commercial contracts (with your future service
          providers and suppliers).
        </p>
        <p>
          But the list doesn&apos;t end there. You need to plan for working
          capital to keep your business running:
        </p>
        <ul className="list-disc pl-5 space-y-2">
          <li>
            <strong>Operating costs</strong> will be added, such as office
            equipment (computer, software), telephone and internet packages,
            financial tools (credit card terminal, cash register, payment
            platform), furnishing premises, taking out professional civil
            liability insurance, purchasing stock.
          </li>
          <li>
            <strong>The costs associated with the personal time</strong> you
            will invest in creating your SASU. Starting your own business can be
            very time-consuming.
          </li>
        </ul>
      </div>
    ),
  },
  {
    question: "What is the minimum contribution for a SASU?",
    answer:
      "There is no minimum contribution required to establish a SASU. Thus, it is possible to create a SASU with a share capital of 1 euro. However, entrepreneurs generally prefer a share capital of around 1,000 euros to gain greater credibility with banks and their business partners.  ",
  },
  {
    question: "Can you open a SASU alone?",
    answer:
      "Yes, a SASU is a so-called single-member company (formed by a single shareholder). Therefore, there can only be one partner in a SASU. However, it is possible to create a SAS (simplified joint-stock company) with multiple partners.",
  },
  {
    question: "What are the steps for creating a SASU?",
    answer: (
      <div className="space-y-4">
        <p>Creating a SASU online requires going through several key steps:</p>
        <ul className="list-disc pl-5 space-y-2">
          <li>Step 1: drafting the statutes</li>
          <li>Step 2: Deposit of share capital</li>
          <li>Step 3: publication of the legal notice</li>
          <li>Step 4: transmitting the file to the Single Window</li>
          <li>Step 5: registration of the SASU</li>
        </ul>
        <p>
          <strong>Step 1: drafting the statutes</strong>
        </p>
        <p>
          The statutes are strategic for your company because they set the
          operating rules:
        </p>
        <ul className="list-disc pl-5 space-y-2">
          <li>The company name;</li>
          <li>The legal form (SASU);</li>
          <li>The address of the head office;</li>
          <li>The partner’s contributions;</li>
          <li>The amount, in euros, of the share capital;</li>
          <li>The corporate purpose;</li>
          <li>The lifespan of the company (maximum 99 years);</li>
          <li>
            The president and the possible general director (DG) or deputy
            general director (DGD);
          </li>
          <li>The company&apos;s management arrangements;</li>
          <li>The rules for the appointment of the president;</li>
          <li>
            The conditions for appointing one or more persons, in addition to
            the president: general manager or deputy general manager.
          </li>
        </ul>
        <p>
          <strong>Step 2: Deposit of share capital</strong>
        </p>
        <p>
          As a reminder, the share capital of the SASU is made up of your
          contributions:
        </p>
        <ul className="list-disc pl-5 space-y-2">
          <li>In cash (sum of money)</li>
          <li>And in kind (movable or immovable property).</li>
        </ul>
        <p>
          <strong>Please note:</strong> the contribution of industry (know-how
          or skills) does not contribute to the creation of share capital.
        </p>
        <p>
          The share capital is deposited before the articles of association are
          signed and the company is registered. It must be made to a credit
          institution or notary by bank transfer, check, or cash.
        </p>
        <p>
          <strong>Step 3: publication of the legal notice</strong>
        </p>
        <p>
          The publication of the notice of incorporation of your SASU must be
          completed before:
        </p>
        <ul className="list-disc pl-5 space-y-2">
          <li>Its registration in the trade and companies register (RCS);</li>
          <li>Its registration in the national business directory (RNE).</li>
        </ul>
        <p>
          <strong>Step 4: transmitting the file to the Single Window</strong>
        </p>
        <p>
          The One-Stop Shop is a platform that allows you to complete business
          creation formalities online. You will need to complete a single form
          and submit your supporting documents to the website procedures.inpi.fr
          .
        </p>
        <p>
          <strong>Step 5: registration of the SASU</strong>
        </p>
        <p>
          This is the finalization of your formality. If your file is duly
          completed, the registry will be able to proceed with the registration
          of your SASU in the national business register (Registre national des
          entreprises) and in the trade and companies register (RCS: Registre du
          commerce et des sociétés). You will then receive a document with your
          Siren number.
        </p>
      </div>
    ),
  },
  {
    question: "What is the processing time for the registry?",
    answer:
      "The business creation process is quick. Your articles of association will be available as soon as you have completed your questionnaire. Once your application is complete and approved, your lawyer will initiate all the necessary procedures with the registry to register your company as quickly as possible. You will then receive your Kbis (Registration of Companies) on average 7 days later (varies by department).",
  },
  {
    question: "What are the disadvantages of the SASU?",
    answer: (
      <div className="space-y-4">
        <p>
          While the SASU has the advantage of being flexible, it also has some
          disadvantages that you should keep in mind before opening a SASU:
        </p>
        <ul className="list-disc pl-5 space-y-2">
          <li>
            <strong>Creation steps:</strong> The formalities for creating a SASU
            can be complex. The shareholder must, in particular, draft articles
            of association, constitute the company&apos;s share capital, publish
            a registration notice, etc.
          </li>
          <li>
            <strong>Cost of social security contributions:</strong> In a SASU,
            the amount of contributions is high. It is necessary to count
            approximately 80% of the manager&apos;s net salary.
          </li>
          <li>
            <strong>Administrative obligations:</strong> The president of the
            SASU is subject to numerous reporting obligations. He must prepare
            pay slips if he pays himself, keep complete accounts and a register
            of decisions, etc.{" "}
          </li>
          <li>
            <strong>Closure cost:</strong> when the sole shareholder abandons
            his project, the closure formalities are cumbersome and generate a
            cost.
          </li>
        </ul>
      </div>
    ),
  },
  {
    question: "How to switch from a SASU to an SAS?",
    answer: (
      <div className="space-y-4">
        <p>The switch from a SASU to an SAS can occur in several situations:</p>
        <ul className="list-disc pl-5 space-y-2">
          <li>
            <strong>During a capital increase</strong> (with the entry of one or
            more partners),
          </li>
          <li>
            <strong>In the event </strong> of transfer by the sole shareholder
            of all or part of his shares to several new shareholders
          </li>
          <li>
            <strong>Following the death of the sole shareholder</strong> and the
            division of his shares between several people.{" "}
          </li>
        </ul>
        <p>
          This change{" "}
          <strong>does not constitute a business transformation</strong> since
          it is the same legal form (the SASU is a single-member SAS).
        </p>
        <p>
          <strong>The amendment of the statutes</strong> is{" "}
          <strong>not obligatory</strong> , if the statutes have been drafted in
          such a way as to anticipate this eventuality by providing for
          operation and organization with several partners (if they already
          contain, for example, an approval, pre-emption, exclusion clause,
          etc.).
        </p>
        <p>
          However, steps will need to be taken with the registry to have the SAS
          listed on the Kbis and you will need to publish it in a legal notices
          journal. Internal formalities will need to be completed, such as a
          management report and minutes of the meeting (called a sole
          shareholder decision).
        </p>
        <p>
          Finally, share transfers must be registered with the Business Tax
          Service (SIE) and registration fees will be payable.
        </p>
      </div>
    ),
  },
  {
    question: "What is the difference between SASU and self-employed?",
    answer: (
      <div className="space-y-4">
        <p>The strengths of the micro-enterprise compared to the SASU are:</p>
        <ul className="list-disc pl-5 space-y-2">
          <li>creation formalities and simplified management;</li>
          <li>lean accounting;</li>
          <li>lower social security contributions.</li>
        </ul>

        <p>The strengths of the SASU compared to the micro-enterprise are:</p>
        <ul className="list-disc pl-5 space-y-2">
          <li>
            freedom in drafting the statutes and in organizing the operation of
            the company;
          </li>
          <li>the absence of turnover thresholds;</li>
          <li>
            the assimilated employee regime and affiliation to the General
            Social Security Regime.
          </li>
        </ul>
        <p>
          Do you have questions about choosing between a SASU (Single-Sector
          Enterprise) and a micro-enterprise? Check out our article:
          Self-employed or SASU: Which status should you choose?
        </p>
      </div>
    ),
  },
  {
    question: "What documents are required to create a single-line SASU?",
    answer: (
      <div className="space-y-4">
        <p>
          Registering your business can be complex due to the various legal
          documents required. Indeed, you must submit a complete SASU creation
          file to avoid rejection by the registry. The file must include:
        </p>
        <ul className="list-disc pl-5 space-y-2">
          <li>two copies of the statutes;</li>
          <li>
            a copy of the published legal notice (certificate of publication);
          </li>
          <li>a certificate of deposit of funds;</li>
          <li>a sworn statement of no conviction;</li>
          <li>a copy of the national identity card or passport;</li>
          <li>a certificate of company domiciliation;</li>
          <li>an act of appointment of the president;</li>
          <li>the register of beneficial owners</li>
        </ul>
        <p>
          As you will have understood, these procedures can be complex, but
          Captain Contrat offers to take care of these legal formalities to
          create your SASU .
        </p>
      </div>
    ),
  },
  {
    question: "How long does it take to create a SASU online?",
    answer: (
      <div className="space-y-4">
        <p>
          Creating a SASU online involves several steps, including drafting the
          articles of association, publishing a notice of incorporation in a
          legal notices journal, and registering with the receipt of the Kbis.
        </p>
        <p>
          On average, the time to create your SASU online is between one week
          and one month.
        </p>
        <p>
          To save time on all the key steps , benefit from the support of
          Captain Contrat.
        </p>
      </div>
    ),
  },
  {
    question: "What are the charges to pay for a SASU?",
    answer: (
      <div className="space-y-4">
        <p>
          There are two types of social charges to take into account before
          creating a SASU:
        </p>
        <ul className="list-disc pl-5 space-y-2">
          <li>
            employee and employer contributions attached to the remuneration of
            the manager (also called president in SAS and SASU) and any
            employees;
          </li>
          <li>
            social security contributions attached to dividends paid to the
            shareholder .
          </li>
        </ul>
        <p>
          For employee and employer contributions, the SASU can be more
          advantageous than an EURL, because in the absence of remuneration paid
          by the company, no social security contributions are payable.
        </p>
        <p>
          On the other hand, the SASU charges on the manager&apos;s salary will
          be higher than for the EURL. The president of a SASU is covered by the
          assimilated employee scheme . This scheme offers social protection
          similar to that of employees. But in return, the charges in a SASU
          will be higher than for an EURL whose manager is a self-employed
          worker (around 80% of net salary compared to 45%).
        </p>
        <p>
          Do you need additional information on the costs associated with the
          SASU? Benefit from the support of our experts .
        </p>
      </div>
    ),
  },
  {
    question: "What are the differences between SASU and EURL?",
    answer: (
      <div className="space-y-4">
        <p>
          Although the EURL and the SASU have in common the fact that they are
          single-member companies (one partner), there are significant
          differences between these two structures:
        </p>
        <ul className="list-disc pl-5 space-y-2">
          <li>Differences in social protection</li>
          <li>Differences in governance and organization</li>
          <li>Differences in the transfer of shares</li>
        </ul>

        <p>
          <strong>Differences in social protection</strong>
        </p>
        <p>
          By opting for the role of President of SASU, you will be considered an
          employee, and therefore affiliated with the general Social Security
          scheme (if you pay yourself a salary).
        </p>
        <p>
          Conversely, the sole manager of an EURL is a self-employed worker
          (TNS).
        </p>
        <p>
          To choose between these two companies, you will need to determine what
          matters most to you:
        </p>
        <ul className="list-disc pl-5 space-y-2">
          <li>pay less social security contributions (EURL);</li>
          <li>or benefit from better social protection (SASU).</li>
        </ul>
        <p>
          <strong>Differences in governance and organization</strong>
        </p>
        <p>
          The EURL is a more regulated legal form than the SASU. It is suitable
          for entrepreneurs seeking greater security.
        </p>
        <p>
          Conversely, other legal forms allow you the freedom to organize the
          operation of your company yourself. This is the case with the SASU
          (Single Shareholders&apos; Limited Liability Company), which allows
          shareholders to organize the company&apos;s governance as they wish.{" "}
        </p>
        <p>
          <strong>Differences in the transfer of shares</strong>
        </p>
        <p>
          The partner of a SASU is a shareholder and therefore receives, in
          return for his contributions, shares .
        </p>
        <p>The EURL manager receives shares.</p>
        <p>
          Please note that the transfer of shares is simpler than the transfer
          of company shares. In fact, in the case of a transfer of shares, no
          written document is required (it is the registration in the
          buyer&apos;s account that will materialize the transfer of ownership),
          whereas in the case of a transfer of company shares, specific
          formalities must be followed, and a written document must be drawn up
          to record the said transfer.
        </p>
        <p>
          The simplicity of the transfer is an important element to take into
          account, particularly if you subsequently plan to transform your SASU
          into an SAS (or your EURL into an SARL).
        </p>
      </div>
    ),
  },
  {
    question:
      "What are the differences between a SASU and a sole proprietorship (EI)?",
    answer: (
      <div className="space-y-4">
        <p>The differences between a corporation and an EI</p>

        <p>
          The creation of a SASU gives rise to a legal entity separate from the
          person who manages it and which has its own assets.
        </p>

        <p>
          The sole proprietorship (EI), on the other hand, is not separate from
          the entrepreneur who creates it. The entrepreneur carries out his
          activity in his own name.
        </p>

        <p>
          The SASU allows you to distinguish your assets and your liability will
          be limited to the amounts of your contributions .
        </p>

        <p>
          The sole proprietorship (EI), on the other hand, is not separate from
          the entrepreneur who creates it. The entrepreneur carries out his
          activity in his own name.
        </p>

        <p>Differences in turnover ceilings</p>

        <p>
          The sole proprietorship has the option of choosing the advantageous
          micro-enterprise regime. However, this regime is subject to turnover
          ceilings: €77,700 for services (BIC or BNC) and €188,700 for sales
          activities (of goods, objects, supplies, etc.).
        </p>

        <p>
          The sole proprietorship has the option of choosing the advantageous
          micro-enterprise regime. However, this regime is subject to turnover
          ceilings: €77,700 for services (BIC or BNC) and €188,700 for sales
          activities (of goods, objects, supplies, etc.).
        </p>

        <p>
          This choice can therefore prove advantageous for entrepreneurs who do
          not particularly wish to develop or grow their business.
        </p>

        <p>
          These ceilings do not exist in SASUs. This structure is therefore more
          suitable for ambitious projects.{" "}
        </p>
      </div>
    ),
  },
  {
    question: "Can I be an employee of my SASU?",
    answer:
      "The sole shareholder of a SASU cannot be an employee of the SASU, as there must be a relationship of subordination between the employee and the company. However, this relationship of subordination cannot be characterized in a SASU since the sole shareholder has all the powers. On the other hand, the shareholder who is also the president of the SASU can be compensated for his corporate mandate. ",
  },
  {
    question: "What is the status of a SASU manager?",
    answer:
      "The president of a SASU benefits from the social security system for assimilated employees. This system has the advantage of being protective, but it is relatively expensive for the company (around 80% of net salary). It offers the president of the SASU social security protection similar to that of an employee (with the exception of unemployment insurance).",
  },
  {
    question: "How is the manager of a SASU paid?",
    answer:
      "The sole shareholder who is also the president of the SASU may be remunerated for his corporate mandate. He may also decide not to be remunerated. Furthermore, the sole shareholder may decide to pay themselves dividends. Dividend payments are taxable, but are not subject to social security contributions. The shareholder can choose between income tax or a single flat-rate withholding tax of 30%. The choice between these two mechanisms depends on the shareholder&apos;s other sources of income and their marginal tax rate. ",
  },
  {
    question: "What is the tax regime for SASU?",
    answer:
      "By default, the SASU is subject to corporate income tax (IS). Profits are taxed at a fixed rate of 25%. However, SMEs can benefit from a reduced rate of 15% on the first €42,500. Furthermore, the sole shareholder may decide to opt for income tax for the first 5 financial years. In this case, profits are taxed directly in the hands of the sole shareholder according to the income tax scale brackets. ",
  },
  {
    question: "What is the social security system for SASU?",
    answer:
      "The president of a SASU is considered an assimilated employee. This means that he or she benefits from social security protection comparable to that of an employee (with the exception of unemployment insurance). This social security system costs the SASU relatively little (approximately 80% of net salary). Conversely, the manager of an EURL is a self-employed worker. This regime is less expensive (around 45% of net salary) but social protection is weaker (particularly regarding pension contributions). On the other hand, the manager of an EURL must pay social security contributions on dividends, which is not the case for the president of a SASU.",
  },
];

const businessLawFaqs = [
  {
    question: "What type of lawyer for a business?",
    answer: (
      <div className="space-y-4">
        <p>
          To support a business, a <strong>business lawyer</strong> is the most
          appropriate choice due to their comprehensive expertise. Depending on
          the nature of your needs, several specializations may be relevant:
        </p>
        <ul className="list-disc pl-5 space-y-2">
          <li>
            a <strong>corporate lawyer</strong> for business creation and
            drafting of articles of association
          </li>
          <li>
            a <strong>commercial law attorney</strong> for your business
            relationships and contracts
          </li>
          <li>
            a <strong>tax lawyer</strong> for tax optimization and compliance
          </li>
          <li>
            a <strong>labor lawyer</strong> for drafting contracts and human
            resources management
          </li>
        </ul>
        <p>
          Ideally, you should choose a professional with experience in your
          sector of activity, which will make it easier to understand your
          specific issues.
        </p>
      </div>
    ),
    icon: <MessageSquare className="h-5 w-5 text-red-500" />,
  },
  {
    question: "What are the areas of business law?",
    answer: (
      <div className="space-y-4">
        <p>
          <strong>Business law</strong> is a discipline encompassing all rules
          relating to businesses. It covers several key areas:
        </p>
        <ul className="list-disc pl-5 space-y-2">
          <li>
            <strong>Corporate law</strong> governs the legal life of companies,
            from their creation to their dissolution. It governs the choice of
            legal form (SARL, EURL, SAS, SASU, Individual Enterprise,
            micro-enterprise, etc.), the drafting of statutes, governance,
            relationships between partners and restructuring operations such as
            mergers or acquisitions.
          </li>
          <li>
            <strong>Commercial law</strong> concerns commercial acts, the status
            of traders, commercial leases and business assets. It also governs
            commercial relations between professionals and the regulation of
            commercial practices.
          </li>
          <li>
            <strong>Competition and distribution law</strong> ensures the proper
            functioning of the market by combating anti-competitive practices
            (cartels, abuse of dominant position) and restrictive competition
            practices. It also includes the control of business concentrations
            to limit monopoly situations.
          </li>
          <li>
            <strong>Contract and obligations law</strong> covers all contracts
            used in business life: commercial contracts, service provision
            contracts, partnership contracts, etc. It defines the rules for the
            formation and execution of these contracts.
          </li>
          <li>
            <strong>Intellectual and industrial property</strong> protects
            intellectual creations: patents, trademarks, designs and models,
            copyrights. It is essential for the protection of innovations and
            intangible assets of companies.
          </li>
          <li>
            <strong>Collective procedures law</strong> deals with business
            difficulties: safeguard, recovery and judicial liquidation
            procedures. It also organizes relations with creditors.
          </li>
          <li>
            <strong>International business law</strong> relates to international
            commercial relations: international contracts, international
            commercial arbitration, international trade law. It is crucial for
            companies operating internationally.
          </li>
          <li>
            <strong>Labor law</strong> provides a framework for individual and
            collective labor relations: employment contracts, dismissals,
            collective bargaining, staff representation.
          </li>
        </ul>
        <p>
          These different branches work together to provide a solid legal
          foundation for business activity.
        </p>
      </div>
    ),
    icon: <MessageSquare className="h-5 w-5 text-blue-500" />,
  },
  {
    question: "What is a corporate lawyer?",
    answer: (
      <div className="space-y-4">
        <p>
          A corporate lawyer is a legal expert who accompanies companies
          throughout their existence. Their role is crucial from creation, where
          they advise on choosing the most suitable legal status and draft the
          company's articles of association.
        </p>
        <p>Their main missions include:</p>
        <ul className="list-disc pl-5 space-y-2">
          <li>strategic advice on choosing the legal form</li>
          <li>assistance with administrative formalities</li>
          <li>management of relationships between partners</li>
          <li>advice in case of litigation</li>
        </ul>
        <p>
          They also ensure compliance with legal obligations and ensure the
          company's legal security while facilitating its development.
        </p>
      </div>
    ),
    icon: <MessageSquare className="h-5 w-5 text-green-500" />,
  },
  {
    question: "When to call on a business lawyer?",
    answer: (
      <div className="space-y-4">
        <p>
          Consulting a business lawyer is essential at several key moments in a
          company's life. Their expertise is particularly valuable in the
          following situations:
        </p>
        <ul className="list-disc pl-5 space-y-2">
          <li>during the creation or restructuring of the company</li>
          <li>for the negotiation and drafting of strategic contracts</li>
          <li>in case of commercial disputes</li>
          <li>for external growth operations</li>
          <li>as part of regulatory compliance</li>
        </ul>
        <p>
          A preventive consultation often makes it possible to avoid future
          difficulties and to secure important operations.
        </p>
      </div>
    ),
    icon: <MessageSquare className="h-5 w-5 text-purple-500" />,
  },
  {
    question: "Why does a company need a lawyer?",
    answer: (
      <div className="space-y-4">
        <p>
          A lawyer represents a strategic asset for any company. Their expertise
          makes it possible to anticipate and prevent potential legal
          difficulties, while seizing development opportunities. They ensure the
          company's compliance with constantly evolving regulations and secure
          commercial relationships.
        </p>
        <p>Their essential areas of intervention include:</p>
        <ul className="list-disc pl-5 space-y-2">
          <li>strategic legal advice</li>
          <li>securing contractual documents</li>
          <li>litigation management and prevention</li>
          <li>protection of intangible assets</li>
        </ul>
        <p>
          More than just legal advice, they become a true partner in the
          company's growth.
        </p>
      </div>
    ),
    icon: <MessageSquare className="h-5 w-5 text-orange-500" />,
  },
  {
    question: "Which lawyer for a commercial dispute?",
    answer: (
      <div className="space-y-4">
        <p>
          For commercial disputes, it is generally advisable to call on a lawyer
          specializing in commercial law. This type of lawyer has expertise in
          commercial matters, which is essential for navigating the legal
          complexities that may arise in this field.
        </p>
        <p>
          Their expertise extends from commercial law and contracts to judicial
          procedures before commercial courts. They must also master:
        </p>
        <ul className="list-disc pl-5 space-y-2">
          <li>
            alternative dispute resolution methods such as mediation and
            arbitration
          </li>
          <li>negotiation strategies</li>
          <li>precise evaluation of commercial damages</li>
        </ul>
        <p>
          This legal professional intervenes in a wide variety of commercial
          disputes. They notably handle conflicts between commercial partners,
          abusive terminations of commercial relationships and unpaid debts.
        </p>
        <p>
          Their field of action also covers litigation related to commercial
          contracts, disputes between partners, cases of unfair competition and
          distribution litigation.
        </p>
      </div>
    ),
    icon: <MessageSquare className="h-5 w-5 text-red-600" />,
  },
  {
    question: "What is the difference between commercial law and business law?",
    answer: (
      <div className="space-y-4">
        <p>
          Commercial law and business law are two branches of law that, although
          closely related, have major differences:
        </p>
        <ul className="list-disc pl-5 space-y-2">
          <li>
            <strong>Commercial law</strong> is a sub-branch of business law that
            focuses specifically on commercial acts and merchants. It governs
            commercial contracts, commercial leases, commercial companies, and
            other aspects related to commercial transactions. It is mainly
            governed by the Commercial Code.
          </li>
          <li>
            <strong>Business law</strong>, on the other hand, encompasses a
            broader field. It includes not only commercial law, but also other
            areas such as corporate law, competition law, intellectual property
            law, tax law and labor law. Thus, business law covers all legal
            aspects that affect the life of companies, from their creation to
            their closure.
          </li>
        </ul>
      </div>
    ),
    icon: <MessageSquare className="h-5 w-5 text-indigo-500" />,
  },
  {
    question: "Who are the Captain Contract lawyers?",
    answer: (
      <div className="space-y-4">
        <p>
          Captain Contract lawyers are privileged partners, practicing within
          their own firm or at Implied Avocats Expertise Conseil (IAEC). They
          therefore respond to the obligations of ethics and independence
          imposed by their profession.
        </p>
      </div>
    ),
    icon: <MessageSquare className="h-5 w-5 text-gray-500" />,
  },
];

export function FAQ() {
  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <h2 className="lg:text-5xl text-4xl font-bold text-center text-[#1a365d] mb-12">
          We answer your questions
        </h2>

        <Accordion type="single" collapsible className="space-y-4">
          {businessLawFaqs.map((faq, index) => (
            <AccordionItem
              key={index}
              value={`item-${index}`}
              className="bg-lightPrimary rounded-lg border-none px-6 cursor-pointer data-[state=open]:bg-lightPrimary transition-all duration-300"
            >
              <AccordionTrigger className="hover:no-underline py-6 cursor-pointer transition-all duration-300">
                <div className="flex items-center gap-3 text-left lg:text-lg text-base">
                  {faq.icon}
                  <span className="text-black font-semibold lg:text-xl text-lg">
                    {faq.question}
                  </span>
                </div>
              </AccordionTrigger>
              <AccordionContent className="text-gray-700 pb-6 lg:text-base text-sm transition-all duration-300">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
}
