// ================= ভাষার অনুবাদ (Detail Pages) =================
const detailTranslations = {
    en: {
        navHome: "Home", navService: "Service", navMenu: "Menu",
        navRecord: "Record", navMine: "Mine",

        introTitle: "Introduction",
        introDesc: "Grab Orders. Complete Tasks. Earn Commissions.",
        introBody: "Our platform connects users with available orders and task-based opportunities. Simply browse and grab an available order, follow the required steps, and submit the completed task through the platform. Eligible completed orders can generate commission rewards according to the applicable terms and conditions.",

        affiliateTitle: "Affiliates Marketing",
        affiliateDesc: "Turn Your Network Into Opportunity.",
        affiliateBody: "Affiliate Marketing gives you the opportunity to earn rewards by introducing new customers to our platform. Share your unique referral link with your audience, friends, or network and receive commissions for eligible referrals. The more you grow your network, the greater your earning potential.",

        rulesTitle: "Platform Rules",
        rulesDesc: "Platform Rules & User Guidelines",
        rulesHeading: "Platform Rules & Working Guidelines",
        rule1Title: "01. Account Registration",
        rule1Body: "Please provide accurate and valid information when creating your account. Keep your login details confidential and secure.",
        rule2Title: "02. Order Selection",
        rule2Body: "Users can access available orders through their working account. Review the order details carefully before selecting an order.",
        rule3Title: "03. Order Completion",
        rule3Body: "Complete each selected order according to the instructions provided by the platform and submit the required information correctly.",
        rule4Title: "04. Commission",
        rule4Body: "Eligible completed orders may generate commission based on the applicable commission rate and current platform terms.",
        rule5Title: "05. Working Balance",
        rule5Body: "Users should maintain the required account balance for activities that require funds to process an order. Any balance movement should be recorded in the account transaction history.",
        rule6Title: "06. Order Submission",
        rule6Body: "Before submitting an order, verify all relevant details. Once submitted, the order may not be reversible depending on its status.",
        rule7Title: "07. Withdrawal",
        rule7Body: "Users may request withdrawal of eligible funds according to the platform's current withdrawal requirements, processing procedures, and supported payment methods.",
        rule8Title: "08. Affiliate Program",
        rule8Body: "Users participating in the Affiliate Program may receive referral rewards for eligible referrals in accordance with the current affiliate terms.",
        rule9Title: "09. Account Security",
        rule9Body: "Never share your password, verification code, wallet credentials, or other confidential account information with another person.",
        rule10Title: "10. Fair Use",
        rule10Body: "Fraud, unauthorized transactions, false information, order manipulation, or attempts to misuse the platform are strictly prohibited.",
        rule11Title: "11. Maintenance & Updates",
        rule11Body: "The platform may perform scheduled or emergency maintenance and system upgrades. Some services may be temporarily unavailable during this period.",
        rule12Title: "12. Customer Support",
        rule12Body: "For questions regarding orders, account balance, commissions, withdrawals, or affiliate activities, please contact Customer Support through the official support channel.",

        paymentTitle: "Payment Methods",
        paymentDesc: "Digital Currency Support",
        paymentH1: "Crypto Payment & Deposit",
        paymentStrong1: "Supported Payment Methods",
        paymentP1: "Our platform supports deposits using selected digital currencies and blockchain networks. Available options may include USDT, USDC, TRC20, ERC20, and BEP20, depending on the payment method currently available on your account.",
        paymentH2: "How to Deposit",
        step1Title: "Step 1 — Open Deposit",
        step1Body: "Log in to your account and navigate to Wallet → Deposit.",
        step2Title: "Step 2 — Select Cryptocurrency",
        step2Body: "Choose your preferred digital currency and select the correct blockchain network.",
        step3Title: "Step 3 — Copy the Deposit Address",
        step3Body: "Copy the wallet address displayed on the deposit page. Always verify the address and network before sending funds.",
        step4Title: "Step 4 — Send the Payment",
        step4Body: "Open your crypto wallet or exchange, enter the deposit address, select the same network, and enter the amount you want to deposit.",
        step5Title: "Step 5 — Confirm the Transaction",
        step5Body: "Review the currency, network, wallet address, and amount carefully before confirming the transfer.",
        step6Title: "Step 6 — Wait for Confirmation",
        step6Body: "After the blockchain transaction receives the required confirmations, the deposited amount will be credited to your platform account according to the platform's processing procedure.",
        paymentH3Important: "Important",
        paymentP2: "Always use the exact cryptocurrency and network shown on the deposit page. Sending funds through an unsupported network or to an incorrect address may result in permanent loss of funds.",
        paymentH3Status: "Deposit Status",
        paymentP3: "You can check your transaction status from Wallet → Deposit History. If a transaction remains pending beyond the normal processing time, contact Customer Support with the transaction hash (TXID)."
    },

    es: {
        navHome: "Inicio", navService: "Servicio", navMenu: "Menú",
        navRecord: "Registro", navMine: "Mío",

        introTitle: "Introducción",
        introDesc: "Toma pedidos. Completa tareas. Gana comisiones.",
        introBody: "Nuestra plataforma conecta a los usuarios con pedidos disponibles y oportunidades basadas en tareas. Simplemente navegue y tome un pedido disponible, siga los pasos requeridos y envíe la tarea completada a través de la plataforma. Los pedidos completados elegibles pueden generar recompensas de comisión según los términos y condiciones aplicables.",

        affiliateTitle: "Marketing de afiliados",
        affiliateDesc: "Convierte tu red en oportunidad.",
        affiliateBody: "El Marketing de Afiliados te da la oportunidad de ganar recompensas presentando nuevos clientes a nuestra plataforma. Comparte tu enlace de referencia único con tu audiencia, amigos o red y recibe comisiones por referencias elegibles. Cuanto más crezca tu red, mayor será tu potencial de ingresos.",

        rulesTitle: "Reglas de la plataforma",
        rulesDesc: "Reglas de la plataforma y guías de usuario",
        rulesHeading: "Reglas de la Plataforma y Directrices de Trabajo",
        rule1Title: "01. Registro de Cuenta",
        rule1Body: "Proporcione información precisa y válida al crear su cuenta. Mantenga sus datos de inicio de sesión confidenciales y seguros.",
        rule2Title: "02. Selección de Pedido",
        rule2Body: "Los usuarios pueden acceder a los pedidos disponibles a través de su cuenta de trabajo. Revise los detalles del pedido cuidadosamente antes de seleccionar uno.",
        rule3Title: "03. Finalización del Pedido",
        rule3Body: "Complete cada pedido seleccionado según las instrucciones proporcionadas por la plataforma y envíe la información requerida correctamente.",
        rule4Title: "04. Comisión",
        rule4Body: "Los pedidos completados elegibles pueden generar comisión según la tasa de comisión aplicable y los términos actuales de la plataforma.",
        rule5Title: "05. Saldo de Trabajo",
        rule5Body: "Los usuarios deben mantener el saldo de cuenta requerido para actividades que requieren fondos para procesar un pedido. Cualquier movimiento de saldo debe registrarse en el historial de transacciones de la cuenta.",
        rule6Title: "06. Envío del Pedido",
        rule6Body: "Antes de enviar un pedido, verifique todos los detalles relevantes. Una vez enviado, el pedido puede no ser reversible según su estado.",
        rule7Title: "07. Retiro",
        rule7Body: "Los usuarios pueden solicitar el retiro de fondos elegibles según los requisitos actuales de retiro, procedimientos de procesamiento y métodos de pago admitidos.",
        rule8Title: "08. Programa de Afiliados",
        rule8Body: "Los usuarios que participan en el Programa de Afiliados pueden recibir recompensas por referencias elegibles de acuerdo con los términos actuales de afiliados.",
        rule9Title: "09. Seguridad de la Cuenta",
        rule9Body: "Nunca comparta su contraseña, código de verificación, credenciales de billetera u otra información confidencial de la cuenta con otra persona.",
        rule10Title: "10. Uso Justo",
        rule10Body: "El fraude, las transacciones no autorizadas, la información falsa, la manipulación de pedidos o los intentos de hacer un uso indebido de la plataforma están estrictamente prohibidos.",
        rule11Title: "11. Mantenimiento y Actualizaciones",
        rule11Body: "La plataforma puede realizar mantenimiento programado o de emergencia y actualizaciones del sistema. Algunos servicios pueden no estar disponibles temporalmente durante este período.",
        rule12Title: "12. Atención al Cliente",
        rule12Body: "Para preguntas sobre pedidos, saldo de cuenta, comisiones, retiros o actividades de afiliados, comuníquese con Atención al Cliente a través del canal de soporte oficial.",

        paymentTitle: "Métodos de pago",
        paymentDesc: "Soporte de moneda digital",
        paymentH1: "Pago y Depósito Cripto",
        paymentStrong1: "Métodos de Pago Admitidos",
        paymentP1: "Nuestra plataforma admite depósitos utilizando monedas digitales seleccionadas y redes blockchain. Las opciones disponibles pueden incluir USDT, USDC, TRC20, ERC20 y BEP20, según el método de pago disponible actualmente en su cuenta.",
        paymentH2: "Cómo Depositar",
        step1Title: "Paso 1 — Abrir Depósito",
        step1Body: "Inicie sesión en su cuenta y navegue a Billetera → Depósito.",
        step2Title: "Paso 2 — Seleccionar Criptomoneda",
        step2Body: "Elija su moneda digital preferida y seleccione la red blockchain correcta.",
        step3Title: "Paso 3 — Copiar la Dirección de Depósito",
        step3Body: "Copie la dirección de la billetera que se muestra en la página de depósito. Siempre verifique la dirección y la red antes de enviar fondos.",
        step4Title: "Paso 4 — Enviar el Pago",
        step4Body: "Abra su billetera cripto o exchange, ingrese la dirección de depósito, seleccione la misma red e ingrese el monto que desea depositar.",
        step5Title: "Paso 5 — Confirmar la Transacción",
        step5Body: "Revise la moneda, la red, la dirección de la billetera y el monto cuidadosamente antes de confirmar la transferencia.",
        step6Title: "Paso 6 — Esperar la Confirmación",
        step6Body: "Después de que la transacción de blockchain reciba las confirmaciones requeridas, el monto depositado se acreditará en su cuenta de plataforma según el procedimiento de procesamiento de la plataforma.",
        paymentH3Important: "Importante",
        paymentP2: "Use siempre la criptomoneda y la red exactas que se muestran en la página de depósito. Enviar fondos a través de una red no admitida o a una dirección incorrecta puede resultar en pérdida permanente de fondos.",
        paymentH3Status: "Estado del Depósito",
        paymentP3: "Puede verificar el estado de su transacción desde Billetera → Historial de Depósitos. Si una transacción permanece pendiente más allá del tiempo de procesamiento normal, comuníquese con Atención al Cliente con el hash de la transacción (TXID)."
    },

    fr: {
        navHome: "Accueil", navService: "Service", navMenu: "Menu",
        navRecord: "Enregistrer", navMine: "Mien",

        introTitle: "Introduction",
        introDesc: "Prenez des commandes. Complétez des tâches. Gagnez des commissions.",
        introBody: "Notre plateforme connecte les utilisateurs avec les commandes disponibles et les opportunités basées sur les tâches. Parcourez et prenez simplement une commande disponible, suivez les étapes requises et soumettez la tâche terminée via la plateforme. Les commandes terminées éligibles peuvent générer des récompenses de commission selon les termes et conditions applicables.",

        affiliateTitle: "Marketing d'affiliation",
        affiliateDesc: "Transformez votre réseau en opportunité.",
        affiliateBody: "Le marketing d'affiliation vous donne l'opportunité de gagner des récompenses en présentant de nouveaux clients à notre plateforme. Partagez votre lien de parrainage unique avec votre audience, vos amis ou votre réseau et recevez des commissions pour les parrainages éligibles. Plus vous développez votre réseau, plus votre potentiel de revenus est élevé.",

        rulesTitle: "Règles de la plateforme",
        rulesDesc: "Règles de la plateforme et directives utilisateur",
        rulesHeading: "Règles de la Plateforme et Directives de Travail",
        rule1Title: "01. Enregistrement du Compte",
        rule1Body: "Veuillez fournir des informations précises et valides lors de la création de votre compte. Gardez vos identifiants de connexion confidentiels et sécurisés.",
        rule2Title: "02. Sélection de Commande",
        rule2Body: "Les utilisateurs peuvent accéder aux commandes disponibles via leur compte de travail. Examinez attentivement les détails de la commande avant d'en sélectionner une.",
        rule3Title: "03. Achèvement de la Commande",
        rule3Body: "Complétez chaque commande sélectionnée selon les instructions fournies par la plateforme et soumettez correctement les informations requises.",
        rule4Title: "04. Commission",
        rule4Body: "Les commandes terminées éligibles peuvent générer une commission en fonction du taux de commission applicable et des conditions actuelles de la plateforme.",
        rule5Title: "05. Solde de Travail",
        rule5Body: "Les utilisateurs doivent maintenir le solde de compte requis pour les activités qui nécessitent des fonds pour traiter une commande. Tout mouvement de solde doit être enregistré dans l'historique des transactions du compte.",
        rule6Title: "06. Soumission de Commande",
        rule6Body: "Avant de soumettre une commande, vérifiez tous les détails pertinents. Une fois soumise, la commande peut ne pas être réversible selon son statut.",
        rule7Title: "07. Retrait",
        rule7Body: "Les utilisateurs peuvent demander le retrait de fonds éligibles selon les exigences de retrait actuelles de la plateforme, les procédures de traitement et les méthodes de paiement prises en charge.",
        rule8Title: "08. Programme d'Affiliation",
        rule8Body: "Les utilisateurs participant au Programme d'Affiliation peuvent recevoir des récompenses de parrainage pour les parrainages éligibles conformément aux conditions d'affiliation actuelles.",
        rule9Title: "09. Sécurité du Compte",
        rule9Body: "Ne partagez jamais votre mot de passe, code de vérification, identifiants de portefeuille ou autres informations de compte confidentielles avec une autre personne.",
        rule10Title: "10. Utilisation Équitable",
        rule10Body: "La fraude, les transactions non autorisées, les fausses informations, la manipulation des commandes ou les tentatives d'utilisation abusive de la plateforme sont strictement interdites.",
        rule11Title: "11. Maintenance et Mises à Jour",
        rule11Body: "La plateforme peut effectuer une maintenance planifiée ou d'urgence et des mises à niveau du système. Certains services peuvent être temporairement indisponibles pendant cette période.",
        rule12Title: "12. Support Client",
        rule12Body: "Pour toute question concernant les commandes, le solde du compte, les commissions, les retraits ou les activités d'affiliation, veuillez contacter le Support Client via le canal de support officiel.",

        paymentTitle: "Méthodes de paiement",
        paymentDesc: "Support de crypto-monnaie",
        paymentH1: "Paiement et Dépôt Crypto",
        paymentStrong1: "Méthodes de Paiement Prises en Charge",
        paymentP1: "Notre plateforme prend en charge les dépôts à l'aide de monnaies numériques sélectionnées et de réseaux blockchain. Les options disponibles peuvent inclure USDT, USDC, TRC20, ERC20 et BEP20, selon le mode de paiement actuellement disponible sur votre compte.",
        paymentH2: "Comment Déposer",
        step1Title: "Étape 1 — Ouvrir le Dépôt",
        step1Body: "Connectez-vous à votre compte et accédez à Portefeuille → Dépôt.",
        step2Title: "Étape 2 — Sélectionner la Crypto-monnaie",
        step2Body: "Choisissez votre monnaie numérique préférée et sélectionnez le bon réseau blockchain.",
        step3Title: "Étape 3 — Copier l'Adresse de Dépôt",
        step3Body: "Copiez l'adresse du portefeuille affichée sur la page de dépôt. Vérifiez toujours l'adresse et le réseau avant d'envoyer des fonds.",
        step4Title: "Étape 4 — Envoyer le Paiement",
        step4Body: "Ouvrez votre portefeuille crypto ou exchange, entrez l'adresse de dépôt, sélectionnez le même réseau et entrez le montant que vous souhaitez déposer.",
        step5Title: "Étape 5 — Confirmer la Transaction",
        step5Body: "Vérifiez attentivement la devise, le réseau, l'adresse du portefeuille et le montant avant de confirmer le transfert.",
        step6Title: "Étape 6 — Attendre la Confirmation",
        step6Body: "Une fois que la transaction blockchain a reçu les confirmations requises, le montant déposé sera crédité sur votre compte de plateforme selon la procédure de traitement de la plateforme.",
        paymentH3Important: "Important",
        paymentP2: "Utilisez toujours la crypto-monnaie et le réseau exacts indiqués sur la page de dépôt. L'envoi de fonds via un réseau non pris en charge ou à une adresse incorrecte peut entraîner une perte permanente de fonds.",
        paymentH3Status: "Statut du Dépôt",
        paymentP3: "Vous pouvez vérifier le statut de votre transaction depuis Portefeuille → Historique des Dépôts. Si une transaction reste en attente au-delà du temps de traitement normal, contactez le Support Client avec le hash de la transaction (TXID)."
    },

    de: {
        navHome: "Startseite", navService: "Service", navMenu: "Menü",
        navRecord: "Aufzeichnung", navMine: "Meins",

        introTitle: "Einführung",
        introDesc: "Bestellungen annehmen. Aufgaben erledigen. Provisionen verdienen.",
        introBody: "Unsere Plattform verbindet Benutzer mit verfügbaren Bestellungen und aufgabenbasierten Möglichkeiten. Durchsuchen Sie einfach und nehmen Sie eine verfügbare Bestellung an, befolgen Sie die erforderlichen Schritte und reichen Sie die abgeschlossene Aufgabe über die Plattform ein. Berechtigte abgeschlossene Bestellungen können Provisionsprämien gemäß den geltenden Bedingungen generieren.",

        affiliateTitle: "Affiliate-Marketing",
        affiliateDesc: "Verwandeln Sie Ihr Netzwerk in eine Chance.",
        affiliateBody: "Affiliate-Marketing bietet Ihnen die Möglichkeit, Belohnungen zu verdienen, indem Sie neue Kunden für unsere Plattform gewinnen. Teilen Sie Ihren einzigartigen Empfehlungslink mit Ihrem Publikum, Freunden oder Netzwerk und erhalten Sie Provisionen für berechtigte Empfehlungen. Je mehr Sie Ihr Netzwerk ausbauen, desto größer ist Ihr Verdienstpotenzial.",

        rulesTitle: "Plattformregeln",
        rulesDesc: "Plattformregeln & Benutzerrichtlinien",
        rulesHeading: "Plattformregeln & Arbeitsrichtlinien",
        rule1Title: "01. Kontoregistrierung",
        rule1Body: "Bitte geben Sie bei der Erstellung Ihres Kontos korrekte und gültige Informationen an. Halten Sie Ihre Anmeldedaten vertraulich und sicher.",
        rule2Title: "02. Auftragsauswahl",
        rule2Body: "Benutzer können über ihr Arbeitskonto auf verfügbare Bestellungen zugreifen. Überprüfen Sie die Bestelldetails sorgfältig, bevor Sie eine Bestellung auswählen.",
        rule3Title: "03. Auftragsabschluss",
        rule3Body: "Schließen Sie jede ausgewählte Bestellung gemäß den von der Plattform bereitgestellten Anweisungen ab und reichen Sie die erforderlichen Informationen korrekt ein.",
        rule4Title: "04. Provision",
        rule4Body: "Berechtigte abgeschlossene Bestellungen können eine Provision basierend auf dem geltenden Provisionssatz und den aktuellen Plattformbedingungen generieren.",
        rule5Title: "05. Arbeitsguthaben",
        rule5Body: "Benutzer sollten das erforderliche Kontoguthaben für Aktivitäten aufrechterhalten, die Mittel zur Bearbeitung einer Bestellung erfordern. Jede Guthabenbewegung sollte im Kontotransaktionsverlauf aufgezeichnet werden.",
        rule6Title: "06. Auftragseinreichung",
        rule6Body: "Überprüfen Sie vor dem Einreichen einer Bestellung alle relevanten Details. Nach der Einreichung ist die Bestellung je nach Status möglicherweise nicht umkehrbar.",
        rule7Title: "07. Auszahlung",
        rule7Body: "Benutzer können die Auszahlung berechtigter Mittel gemäß den aktuellen Auszahlungsanforderungen, Verarbeitungsverfahren und unterstützten Zahlungsmethoden der Plattform beantragen.",
        rule8Title: "08. Partnerprogramm",
        rule8Body: "Benutzer, die am Partnerprogramm teilnehmen, können Empfehlungsprämien für berechtigte Empfehlungen gemäß den aktuellen Partnerbedingungen erhalten.",
        rule9Title: "09. Kontosicherheit",
        rule9Body: "Geben Sie niemals Ihr Passwort, Ihren Verifizierungscode, Ihre Wallet-Anmeldeinformationen oder andere vertrauliche Kontoinformationen an eine andere Person weiter.",
        rule10Title: "10. Faire Nutzung",
        rule10Body: "Betrug, unbefugte Transaktionen, falsche Informationen, Auftragsmanipulation oder Versuche, die Plattform zu missbrauchen, sind streng verboten.",
        rule11Title: "11. Wartung & Updates",
        rule11Body: "Die Plattform kann geplante oder Notfallwartungen und System-Upgrades durchführen. Einige Dienste können während dieses Zeitraums vorübergehend nicht verfügbar sein.",
        rule12Title: "12. Kundensupport",
        rule12Body: "Bei Fragen zu Bestellungen, Kontostand, Provisionen, Auszahlungen oder Affiliate-Aktivitäten wenden Sie sich bitte über den offiziellen Support-Kanal an den Kundensupport.",

        paymentTitle: "Zahlungsmethoden",
        paymentDesc: "Unterstützung für digitale Währungen",
        paymentH1: "Krypto-Zahlung & Einzahlung",
        paymentStrong1: "Unterstützte Zahlungsmethoden",
        paymentP1: "Unsere Plattform unterstützt Einzahlungen mit ausgewählten digitalen Währungen und Blockchain-Netzwerken. Verfügbare Optionen können USDT, USDC, TRC20, ERC20 und BEP20 umfassen, je nach der derzeit auf Ihrem Konto verfügbaren Zahlungsmethode.",
        paymentH2: "So Einzahlen Sie",
        step1Title: "Schritt 1 — Einzahlung Öffnen",
        step1Body: "Melden Sie sich in Ihrem Konto an und navigieren Sie zu Wallet → Einzahlung.",
        step2Title: "Schritt 2 — Kryptowährung Auswählen",
        step2Body: "Wählen Sie Ihre bevorzugte digitale Währung und wählen Sie das richtige Blockchain-Netzwerk.",
        step3Title: "Schritt 3 — Einzahlungsadresse Kopieren",
        step3Body: "Kopieren Sie die auf der Einzahlungsseite angezeigte Wallet-Adresse. Überprüfen Sie immer die Adresse und das Netzwerk, bevor Sie Geld senden.",
        step4Title: "Schritt 4 — Zahlung Senden",
        step4Body: "Öffnen Sie Ihre Krypto-Wallet oder Exchange, geben Sie die Einzahlungsadresse ein, wählen Sie dasselbe Netzwerk und geben Sie den Betrag ein, den Sie einzahlen möchten.",
        step5Title: "Schritt 5 — Transaktion Bestätigen",
        step5Body: "Überprüfen Sie Währung, Netzwerk, Wallet-Adresse und Betrag sorgfältig, bevor Sie die Überweisung bestätigen.",
        step6Title: "Schritt 6 — Auf Bestätigung Warten",
        step6Body: "Nachdem die Blockchain-Transaktion die erforderlichen Bestätigungen erhalten hat, wird der eingezahlte Betrag gemäß dem Verarbeitungsverfahren der Plattform Ihrem Plattformkonto gutgeschrieben.",
        paymentH3Important: "Wichtig",
        paymentP2: "Verwenden Sie immer genau die auf der Einzahlungsseite angezeigte Kryptowährung und das Netzwerk. Das Senden von Geldern über ein nicht unterstütztes Netzwerk oder an eine falsche Adresse kann zu einem dauerhaften Verlust von Geldern führen.",
        paymentH3Status: "Einzahlungsstatus",
        paymentP3: "Sie können Ihren Transaktionsstatus unter Wallet → Einzahlungsverlauf überprüfen. Wenn eine Transaktion über die normale Bearbeitungszeit hinaus aussteht, wenden Sie sich mit dem Transaktions-Hash (TXID) an den Kundensupport."
    },

    it: {
        navHome: "Home", navService: "Servizio", navMenu: "Menu",
        navRecord: "Record", navMine: "Mio",

        introTitle: "Introduzione",
        introDesc: "Prendi ordini. Completa attività. Guadagna commissioni.",
        introBody: "La nostra piattaforma collega gli utenti con ordini disponibili e opportunità basate su attività. Sfoglia e prendi semplicemente un ordine disponibile, segui i passaggi richiesti e invia l'attività completata tramite la piattaforma. Gli ordini completati idonei possono generare ricompense di commissione secondo i termini e le condizioni applicabili.",

        affiliateTitle: "Marketing di affiliazione",
        affiliateDesc: "Trasforma la tua rete in opportunità.",
        affiliateBody: "Il Marketing di Affiliazione ti dà l'opportunità di guadagnare ricompense presentando nuovi clienti alla nostra piattaforma. Condividi il tuo link di referral unico con il tuo pubblico, amici o rete e ricevi commissioni per referral idonei. Più cresci la tua rete, maggiore sarà il tuo potenziale di guadagno.",

        rulesTitle: "Regole della piattaforma",
        rulesDesc: "Regole della piattaforma e linee guida utente",
        rulesHeading: "Regole della Piattaforma e Linee Guida di Lavoro",
        rule1Title: "01. Registrazione Account",
        rule1Body: "Fornisci informazioni accurate e valide durante la creazione del tuo account. Mantieni i tuoi dati di accesso riservati e sicuri.",
        rule2Title: "02. Selezione Ordine",
        rule2Body: "Gli utenti possono accedere agli ordini disponibili tramite il loro account di lavoro. Rivedi attentamente i dettagli dell'ordine prima di selezionarne uno.",
        rule3Title: "03. Completamento Ordine",
        rule3Body: "Completa ogni ordine selezionato secondo le istruzioni fornite dalla piattaforma e invia correttamente le informazioni richieste.",
        rule4Title: "04. Commissione",
        rule4Body: "Gli ordini completati idonei possono generare commissioni in base alla tariffa di commissione applicabile e ai termini attuali della piattaforma.",
        rule5Title: "05. Saldo di Lavoro",
        rule5Body: "Gli utenti devono mantenere il saldo del conto richiesto per le attività che richiedono fondi per elaborare un ordine. Qualsiasi movimento di saldo deve essere registrato nella cronologia delle transazioni del conto.",
        rule6Title: "06. Invio Ordine",
        rule6Body: "Prima di inviare un ordine, verifica tutti i dettagli rilevanti. Una volta inviato, l'ordine potrebbe non essere reversibile a seconda del suo stato.",
        rule7Title: "07. Prelievo",
        rule7Body: "Gli utenti possono richiedere il prelievo di fondi idonei in base ai requisiti di prelievo attuali della piattaforma, alle procedure di elaborazione e ai metodi di pagamento supportati.",
        rule8Title: "08. Programma di Affiliazione",
        rule8Body: "Gli utenti che partecipano al Programma di Affiliazione possono ricevere ricompense per referral idonei in conformità con i termini di affiliazione attuali.",
        rule9Title: "09. Sicurezza Account",
        rule9Body: "Non condividere mai la tua password, codice di verifica, credenziali del wallet o altre informazioni riservate del conto con un'altra persona.",
        rule10Title: "10. Uso Corretto",
        rule10Body: "Frode, transazioni non autorizzate, informazioni false, manipolazione degli ordini o tentativi di abusare della piattaforma sono severamente proibiti.",
        rule11Title: "11. Manutenzione e Aggiornamenti",
        rule11Body: "La piattaforma può eseguire manutenzione programmata o di emergenza e aggiornamenti del sistema. Alcuni servizi potrebbero essere temporaneamente non disponibili durante questo periodo.",
        rule12Title: "12. Supporto Clienti",
        rule12Body: "Per domande relative a ordini, saldo del conto, commissioni, prelievi o attività di affiliazione, contatta il Supporto Clienti tramite il canale di supporto ufficiale.",

        paymentTitle: "Metodi di pagamento",
        paymentDesc: "Supporto criptovaluta",
        paymentH1: "Pagamento e Deposito Cripto",
        paymentStrong1: "Metodi di Pagamento Supportati",
        paymentP1: "La nostra piattaforma supporta depositi utilizzando criptovalute selezionate e reti blockchain. Le opzioni disponibili possono includere USDT, USDC, TRC20, ERC20 e BEP20, a seconda del metodo di pagamento attualmente disponibile sul tuo account.",
        paymentH2: "Come Depositare",
        step1Title: "Passo 1 — Apri Deposito",
        step1Body: "Accedi al tuo account e vai a Wallet → Deposito.",
        step2Title: "Passo 2 — Seleziona Criptovaluta",
        step2Body: "Scegli la tua criptovaluta preferita e seleziona la rete blockchain corretta.",
        step3Title: "Passo 3 — Copia l'Indirizzo di Deposito",
        step3Body: "Copia l'indirizzo del wallet visualizzato nella pagina di deposito. Verifica sempre l'indirizzo e la rete prima di inviare fondi.",
        step4Title: "Passo 4 — Invia il Pagamento",
        step4Body: "Apri il tuo wallet cripto o exchange, inserisci l'indirizzo di deposito, seleziona la stessa rete e inserisci l'importo che desideri depositare.",
        step5Title: "Passo 5 — Conferma la Transazione",
        step5Body: "Rivedi attentamente valuta, rete, indirizzo del wallet e importo prima di confermare il trasferimento.",
        step6Title: "Passo 6 — Attendi la Conferma",
        step6Body: "Dopo che la transazione blockchain ha ricevuto le conferme richieste, l'importo depositato sarà accreditato sul tuo account della piattaforma secondo la procedura di elaborazione della piattaforma.",
        paymentH3Important: "Importante",
        paymentP2: "Usa sempre la criptovaluta e la rete esatte mostrate nella pagina di deposito. L'invio di fondi attraverso una rete non supportata o a un indirizzo errato può comportare la perdita permanente dei fondi.",
        paymentH3Status: "Stato del Deposito",
        paymentP3: "Puoi controllare lo stato della tua transazione da Wallet → Cronologia Depositi. Se una transazione rimane in sospeso oltre il normale tempo di elaborazione, contatta il Supporto Clienti con l'hash della transazione (TXID)."
    },

    pt: {
        navHome: "Início", navService: "Serviço", navMenu: "Menu",
        navRecord: "Registro", navMine: "Meu",

        introTitle: "Introdução",
        introDesc: "Pegue pedidos. Complete tarefas. Ganhe comissões.",
        introBody: "Nossa plataforma conecta usuários com pedidos disponíveis e oportunidades baseadas em tarefas. Simplesmente navegue e pegue um pedido disponível, siga os passos necessários e envie a tarefa concluída através da plataforma. Pedidos concluídos elegíveis podem gerar recompensas de comissão de acordo com os termos e condições aplicáveis.",

        affiliateTitle: "Marketing de afiliados",
        affiliateDesc: "Transforme sua rede em oportunidade.",
        affiliateBody: "O Marketing de Afiliados oferece a oportunidade de ganhar recompensas apresentando novos clientes à nossa plataforma. Compartilhe seu link de indicação exclusivo com seu público, amigos ou rede e receba comissões por indicações elegíveis. Quanto mais você cresce sua rede, maior seu potencial de ganhos.",

        rulesTitle: "Regras da plataforma",
        rulesDesc: "Regras da plataforma e diretrizes do usuário",
        rulesHeading: "Regras da Plataforma e Diretrizes de Trabalho",
        rule1Title: "01. Registro de Conta",
        rule1Body: "Forneça informações precisas e válidas ao criar sua conta. Mantenha seus dados de login confidenciais e seguros.",
        rule2Title: "02. Seleção de Pedido",
        rule2Body: "Os usuários podem acessar os pedidos disponíveis através de sua conta de trabalho. Revise os detalhes do pedido com atenção antes de selecionar um pedido.",
        rule3Title: "03. Conclusão do Pedido",
        rule3Body: "Complete cada pedido selecionado de acordo com as instruções fornecidas pela plataforma e envie as informações necessárias corretamente.",
        rule4Title: "04. Comissão",
        rule4Body: "Pedidos concluídos elegíveis podem gerar comissão com base na taxa de comissão aplicável e nos termos atuais da plataforma.",
        rule5Title: "05. Saldo de Trabalho",
        rule5Body: "Os usuários devem manter o saldo de conta necessário para atividades que exigem fundos para processar um pedido. Qualquer movimento de saldo deve ser registrado no histórico de transações da conta.",
        rule6Title: "06. Envio do Pedido",
        rule6Body: "Antes de enviar um pedido, verifique todos os detalhes relevantes. Uma vez enviado, o pedido pode não ser reversível dependendo do seu status.",
        rule7Title: "07. Saque",
        rule7Body: "Os usuários podem solicitar o saque de fundos elegíveis de acordo com os requisitos atuais de saque da plataforma, procedimentos de processamento e métodos de pagamento suportados.",
        rule8Title: "08. Programa de Afiliados",
        rule8Body: "Usuários que participam do Programa de Afiliados podem receber recompensas por indicações elegíveis de acordo com os termos de afiliados atuais.",
        rule9Title: "09. Segurança da Conta",
        rule9Body: "Nunca compartilhe sua senha, código de verificação, credenciais de carteira ou outras informações confidenciais da conta com outra pessoa.",
        rule10Title: "10. Uso Justo",
        rule10Body: "Fraude, transações não autorizadas, informações falsas, manipulação de pedidos ou tentativas de uso indevido da plataforma são estritamente proibidas.",
        rule11Title: "11. Manutenção e Atualizações",
        rule11Body: "A plataforma pode realizar manutenção programada ou de emergência e atualizações do sistema. Alguns serviços podem estar temporariamente indisponíveis durante este período.",
        rule12Title: "12. Suporte ao Cliente",
        rule12Body: "Para perguntas sobre pedidos, saldo da conta, comissões, saques ou atividades de afiliados, entre em contato com o Suporte ao Cliente através do canal de suporte oficial.",

        paymentTitle: "Métodos de pagamento",
        paymentDesc: "Suporte a moeda digital",
        paymentH1: "Pagamento e Depósito Cripto",
        paymentStrong1: "Métodos de Pagamento Suportados",
        paymentP1: "Nossa plataforma suporta depósitos usando moedas digitais selecionadas e redes blockchain. As opções disponíveis podem incluir USDT, USDC, TRC20, ERC20 e BEP20, dependendo do método de pagamento atualmente disponível em sua conta.",
        paymentH2: "Como Depositar",
        step1Title: "Passo 1 — Abrir Depósito",
        step1Body: "Faça login na sua conta e navegue até Carteira → Depósito.",
        step2Title: "Passo 2 — Selecionar Criptomoeda",
        step2Body: "Escolha sua moeda digital preferida e selecione a rede blockchain correta.",
        step3Title: "Passo 3 — Copiar o Endereço de Depósito",
        step3Body: "Copie o endereço da carteira exibido na página de depósito. Sempre verifique o endereço e a rede antes de enviar fundos.",
        step4Title: "Passo 4 — Enviar o Pagamento",
        step4Body: "Abra sua carteira cripto ou exchange, insira o endereço de depósito, selecione a mesma rede e insira o valor que deseja depositar.",
        step5Title: "Passo 5 — Confirmar a Transação",
        step5Body: "Revise cuidadosamente a moeda, a rede, o endereço da carteira e o valor antes de confirmar a transferência.",
        step6Title: "Passo 6 — Aguardar a Confirmação",
        step6Body: "Depois que a transação blockchain receber as confirmações necessárias, o valor depositado será creditado na sua conta da plataforma de acordo com o procedimento de processamento da plataforma.",
        paymentH3Important: "Importante",
        paymentP2: "Use sempre a criptomoeda e a rede exatas mostradas na página de depósito. Enviar fundos através de uma rede não suportada ou para um endereço incorreto pode resultar em perda permanente de fundos.",
        paymentH3Status: "Status do Depósito",
        paymentP3: "Você pode verificar o status da sua transação em Carteira → Histórico de Depósitos. Se uma transação permanecer pendente além do tempo normal de processamento, entre em contato com o Suporte ao Cliente com o hash da transação (TXID)."
    },

    nl: {
        navHome: "Home", navService: "Service", navMenu: "Menu",
        navRecord: "Opnemen", navMine: "Mijn",

        introTitle: "Introductie",
        introDesc: "Pak bestellingen. Voltooi taken. Verdien commissies.",
        introBody: "Ons platform verbindt gebruikers met beschikbare bestellingen en taakgerichte mogelijkheden. Blader en pak eenvoudig een beschikbare bestelling, volg de vereiste stappen en dien de voltooide taak in via het platform. In aanmerking komende voltooide bestellingen kunnen commissiebeloningen genereren volgens de toepasselijke voorwaarden.",

        affiliateTitle: "Affiliate marketing",
        affiliateDesc: "Verander uw netwerk in kansen.",
        affiliateBody: "Affiliate Marketing geeft u de mogelijkheid om beloningen te verdienen door nieuwe klanten naar ons platform te verwijzen. Deel uw unieke verwijzingslink met uw publiek, vrienden of netwerk en ontvang commissies voor in aanmerking komende verwijzingen. Hoe meer u uw netwerk laat groeien, hoe groter uw verdienpotentieel.",

        rulesTitle: "Platformregels",
        rulesDesc: "Platformregels en gebruikersrichtlijnen",
        rulesHeading: "Platformregels en Werkrichtlijnen",
        rule1Title: "01. Accountregistratie",
        rule1Body: "Geef nauwkeurige en geldige informatie bij het aanmaken van uw account. Houd uw inloggegevens vertrouwelijk en veilig.",
        rule2Title: "02. Bestellingsselectie",
        rule2Body: "Gebruikers hebben toegang tot beschikbare bestellingen via hun werkaccount. Controleer de bestelgegevens zorgvuldig voordat u een bestelling selecteert.",
        rule3Title: "03. Bestellingsvoltooiing",
        rule3Body: "Voltooi elke geselecteerde bestelling volgens de instructies van het platform en dien de vereiste informatie correct in.",
        rule4Title: "04. Commissie",
        rule4Body: "In aanmerking komende voltooide bestellingen kunnen commissie genereren op basis van het toepasselijke commissietarief en de huidige platformvoorwaarden.",
        rule5Title: "05. Werksaldo",
        rule5Body: "Gebruikers moeten het vereiste accountsaldo aanhouden voor activiteiten waarvoor geld nodig is om een bestelling te verwerken. Elke saldobeweging moet worden geregistreerd in de transactiegeschiedenis van de account.",
        rule6Title: "06. Bestellingsinzending",
        rule6Body: "Controleer alle relevante details voordat u een bestelling indient. Eenmaal ingediend, is de bestelling mogelijk niet omkeerbaar, afhankelijk van de status.",
        rule7Title: "07. Opname",
        rule7Body: "Gebruikers kunnen opname van in aanmerking komende fondsen aanvragen volgens de huidige opnamevereisten, verwerkingsprocedures en ondersteunde betaalmethoden van het platform.",
        rule8Title: "08. Affiliateprogramma",
        rule8Body: "Gebruikers die deelnemen aan het Affiliate Programma kunnen verwijzingsbeloningen ontvangen voor in aanmerking komende verwijzingen in overeenstemming met de huidige affiliatievoorwaarden.",
        rule9Title: "09. Accountbeveiliging",
        rule9Body: "Deel nooit uw wachtwoord, verificatiecode, wallet-inloggegevens of andere vertrouwelijke accountinformatie met een andere persoon.",
        rule10Title: "10. Eerlijk Gebruik",
        rule10Body: "Fraude, ongeautoriseerde transacties, valse informatie, bestellingsmanipulatie of pogingen om het platform te misbruiken zijn ten strengste verboden.",
        rule11Title: "11. Onderhoud en Updates",
        rule11Body: "Het platform kan gepland of noodonderhoud en systeemupgrades uitvoeren. Sommige diensten kunnen tijdens deze periode tijdelijk niet beschikbaar zijn.",
        rule12Title: "12. Klantenondersteuning",
        rule12Body: "Voor vragen over bestellingen, accountsaldo, commissies, opnames of affiliate-activiteiten kunt u contact opnemen met Klantenondersteuning via het officiële ondersteuningskanaal.",

        paymentTitle: "Betaalmethoden",
        paymentDesc: "Ondersteuning voor digitale valuta",
        paymentH1: "Crypto Betaling en Storting",
        paymentStrong1: "Ondersteunde Betaalmethoden",
        paymentP1: "Ons platform ondersteunt stortingen met geselecteerde digitale valuta en blockchain-netwerken. Beschikbare opties kunnen USDT, USDC, TRC20, ERC20 en BEP20 omvatten, afhankelijk van de betaalmethode die momenteel beschikbaar is op uw account.",
        paymentH2: "Hoe te Storten",
        step1Title: "Stap 1 — Storting Openen",
        step1Body: "Log in op uw account en navigeer naar Wallet → Storting.",
        step2Title: "Stap 2 — Cryptocurrency Selecteren",
        step2Body: "Kies uw favoriete digitale valuta en selecteer het juiste blockchain-netwerk.",
        step3Title: "Stap 3 — Het Stortingsadres Kopiëren",
        step3Body: "Kopieer het wallet-adres dat op de stortingspagina wordt weergegeven. Verifieer altijd het adres en netwerk voordat u geld verzendt.",
        step4Title: "Stap 4 — De Betaling Verzenden",
        step4Body: "Open uw crypto-wallet of exchange, voer het stortingsadres in, selecteer hetzelfde netwerk en voer het bedrag in dat u wilt storten.",
        step5Title: "Stap 5 — De Transactie Bevestigen",
        step5Body: "Controleer de valuta, het netwerk, het wallet-adres en het bedrag zorgvuldig voordat u de overdracht bevestigt.",
        step6Title: "Stap 6 — Wachten op Bevestiging",
        step6Body: "Nadat de blockchain-transactie de vereiste bevestigingen heeft ontvangen, wordt het gestorte bedrag bijgeschreven op uw platformaccount volgens de verwerkingsprocedure van het platform.",
        paymentH3Important: "Belangrijk",
        paymentP2: "Gebruik altijd de exacte cryptocurrency en het netwerk die op de stortingspagina worden weergegeven. Het verzenden van geld via een niet-ondersteund netwerk of naar een onjuist adres kan leiden tot permanent verlies van geld.",
        paymentH3Status: "Stortingsstatus",
        paymentP3: "U kunt de status van uw transactie controleren via Wallet → Stortingsgeschiedenis. Als een transactie langer dan de normale verwerkingstijd in behandeling blijft, neem dan contact op met Klantenondersteuning met de transactiehash (TXID)."
    },

    ru: {
        navHome: "Главная", navService: "Сервис", navMenu: "Меню",
        navRecord: "Запись", navMine: "Мой",

        introTitle: "Введение",
        introDesc: "Берите заказы. Выполняйте задания. Зарабатывайте комиссии.",
        introBody: "Наша платформа связывает пользователей с доступными заказами и возможностями на основе задач. Просто просмотрите и возьмите доступный заказ, выполните необходимые шаги и отправьте выполненную задачу через платформу. Подходящие выполненные заказы могут генерировать комиссионные вознаграждения в соответствии с применимыми условиями.",

        affiliateTitle: "Партнерский маркетинг",
        affiliateDesc: "Превратите свою сеть в возможность.",
        affiliateBody: "Партнерский маркетинг дает вам возможность зарабатывать вознаграждения, представляя новых клиентов нашей платформе. Поделитесь своей уникальной реферальной ссылкой с вашей аудиторией, друзьями или сетью и получайте комиссии за подходящие рефералы. Чем больше вы развиваете свою сеть, тем выше ваш потенциал заработка.",

        rulesTitle: "Правила платформы",
        rulesDesc: "Правила платформы и руководство пользователя",
        rulesHeading: "Правила Платформы и Рабочие Рекомендации",
        rule1Title: "01. Регистрация Аккаунта",
        rule1Body: "Пожалуйста, предоставьте точную и достоверную информацию при создании аккаунта. Держите свои данные для входа в тайне и в безопасности.",
        rule2Title: "02. Выбор Заказа",
        rule2Body: "Пользователи могут получить доступ к доступным заказам через свой рабочий аккаунт. Внимательно ознакомьтесь с деталями заказа, прежде чем выбирать заказ.",
        rule3Title: "03. Выполнение Заказа",
        rule3Body: "Выполните каждый выбранный заказ в соответствии с инструкциями, предоставленными платформой, и правильно отправьте необходимую информацию.",
        rule4Title: "04. Комиссия",
        rule4Body: "Подходящие выполненные заказы могут генерировать комиссию на основе применимой ставки комиссии и текущих условий платформы.",
        rule5Title: "05. Рабочий Баланс",
        rule5Body: "Пользователи должны поддерживать необходимый баланс счета для действий, требующих средств для обработки заказа. Любое движение баланса должно быть записано в истории транзакций счета.",
        rule6Title: "06. Отправка Заказа",
        rule6Body: "Перед отправкой заказа проверьте все соответствующие детали. После отправки заказ может быть необратимым в зависимости от его статуса.",
        rule7Title: "07. Вывод Средств",
        rule7Body: "Пользователи могут запросить вывод подходящих средств в соответствии с текущими требованиями платформы к выводу, процедурами обработки и поддерживаемыми способами оплаты.",
        rule8Title: "08. Партнерская Программа",
        rule8Body: "Пользователи, участвующие в Партнерской Программе, могут получать реферальные вознаграждения за подходящие рефералы в соответствии с текущими партнерскими условиями.",
        rule9Title: "09. Безопасность Аккаунта",
        rule9Body: "Никогда не делитесь своим паролем, кодом подтверждения, учетными данными кошелька или другой конфиденциальной информацией об аккаунте с другим человеком.",
        rule10Title: "10. Добросовестное Использование",
        rule10Body: "Мошенничество, несанкционированные транзакции, ложная информация, манипуляции с заказами или попытки злоупотребления платформой строго запрещены.",
        rule11Title: "11. Обслуживание и Обновления",
        rule11Body: "Платформа может выполнять плановое или экстренное обслуживание и обновления системы. Некоторые услуги могут быть временно недоступны в этот период.",
        rule12Title: "12. Поддержка Клиентов",
        rule12Body: "По вопросам о заказах, балансе счета, комиссиях, выводах или партнерских действиях обращайтесь в Службу Поддержки Клиентов через официальный канал поддержки.",

        paymentTitle: "Способы оплаты",
        paymentDesc: "Поддержка цифровой валюты",
        paymentH1: "Крипто-Платеж и Депозит",
        paymentStrong1: "Поддерживаемые Способы Оплаты",
        paymentP1: "Наша платформа поддерживает депозиты с использованием выбранных цифровых валют и блокчейн-сетей. Доступные опции могут включать USDT, USDC, TRC20, ERC20 и BEP20, в зависимости от способа оплаты, доступного в настоящее время на вашем счете.",
        paymentH2: "Как Внести Депозит",
        step1Title: "Шаг 1 — Открыть Депозит",
        step1Body: "Войдите в свой аккаунт и перейдите в Кошелек → Депозит.",
        step2Title: "Шаг 2 — Выбрать Криптовалюту",
        step2Body: "Выберите предпочитаемую цифровую валюту и выберите правильную блокчейн-сеть.",
        step3Title: "Шаг 3 — Скопировать Адрес Депозита",
        step3Body: "Скопируйте адрес кошелька, отображаемый на странице депозита. Всегда проверяйте адрес и сеть перед отправкой средств.",
        step4Title: "Шаг 4 — Отправить Платеж",
        step4Body: "Откройте свой крипто-кошелек или биржу, введите адрес депозита, выберите ту же сеть и введите сумму, которую хотите внести.",
        step5Title: "Шаг 5 — Подтвердить Транзакцию",
        step5Body: "Внимательно проверьте валюту, сеть, адрес кошелька и сумму перед подтверждением перевода.",
        step6Title: "Шаг 6 — Дождаться Подтверждения",
        step6Body: "После того как блокчейн-транзакция получит необходимые подтверждения, сумма депозита будет зачислена на ваш аккаунт платформы в соответствии с процедурой обработки платформы.",
        paymentH3Important: "Важно",
        paymentP2: "Всегда используйте точную криптовалюту и сеть, указанные на странице депозита. Отправка средств через неподдерживаемую сеть или на неправильный адрес может привести к безвозвратной потере средств.",
        paymentH3Status: "Статус Депозита",
        paymentP3: "Вы можете проверить статус транзакции в разделе Кошелек → История Депозитов. Если транзакция остается в ожидании дольше обычного времени обработки, свяжитесь со Службой Поддержки Клиентов, указав хэш транзакции (TXID)."
    },

    tr: {
        navHome: "Ana Sayfa", navService: "Servis", navMenu: "Menü",
        navRecord: "Kayıt", navMine: "Benim",

        introTitle: "Tanıtım",
        introDesc: "Sipariş alın. Görevleri tamamlayın. Komisyon kazanın.",
        introBody: "Platformumuz kullanıcıları mevcut siparişler ve görev tabanlı fırsatlarla buluşturur. Basitçe göz atın ve mevcut bir sipariş alın, gerekli adımları izleyin ve tamamlanan görevi platform üzerinden gönderin. Uygun tamamlanan siparişler, geçerli şartlar ve koşullara göre komisyon ödülleri oluşturabilir.",

        affiliateTitle: "Satış Ortaklığı",
        affiliateDesc: "Ağınızı fırsata dönüştürün.",
        affiliateBody: "Satış Ortaklığı, platformumuza yeni müşteriler tanıtarak ödül kazanma fırsatı sunar. Benzersiz referans bağlantınızı kitlenizle, arkadaşlarınızla veya ağınızla paylaşın ve uygun referanslar için komisyon alın. Ağınızı ne kadar büyütürseniz, kazanç potansiyeliniz o kadar artar.",

        rulesTitle: "Platform Kuralları",
        rulesDesc: "Platform Kuralları ve Kullanıcı Yönergeleri",
        rulesHeading: "Platform Kuralları ve Çalışma Yönergeleri",
        rule1Title: "01. Hesap Kaydı",
        rule1Body: "Hesabınızı oluştururken doğru ve geçerli bilgiler sağlayın. Giriş bilgilerinizi gizli ve güvenli tutun.",
        rule2Title: "02. Sipariş Seçimi",
        rule2Body: "Kullanıcılar çalışma hesapları aracılığıyla mevcut siparişlere erişebilir. Bir sipariş seçmeden önce sipariş ayrıntılarını dikkatlice inceleyin.",
        rule3Title: "03. Sipariş Tamamlama",
        rule3Body: "Seçilen her siparişi platform tarafından sağlanan talimatlara göre tamamlayın ve gerekli bilgileri doğru şekilde gönderin.",
        rule4Title: "04. Komisyon",
        rule4Body: "Uygun tamamlanan siparişler, geçerli komisyon oranına ve mevcut platform şartlarına göre komisyon oluşturabilir.",
        rule5Title: "05. Çalışma Bakiyesi",
        rule5Body: "Kullanıcılar, bir siparişi işlemek için fon gerektiren faaliyetler için gerekli hesap bakiyesini korumalıdır. Herhangi bir bakiye hareketi hesap işlem geçmişine kaydedilmelidir.",
        rule6Title: "06. Sipariş Gönderimi",
        rule6Body: "Bir sipariş göndermeden önce tüm ilgili ayrıntıları doğrulayın. Gönderildikten sonra sipariş, durumuna bağlı olarak geri alınamaz olabilir.",
        rule7Title: "07. Para Çekme",
        rule7Body: "Kullanıcılar, platformun mevcut para çekme gereksinimlerine, işleme prosedürlerine ve desteklenen ödeme yöntemlerine göre uygun fonların çekilmesini talep edebilir.",
        rule8Title: "08. Satış Ortaklığı Programı",
        rule8Body: "Satış Ortaklığı Programına katılan kullanıcılar, mevcut satış ortaklığı şartlarına uygun olarak uygun referanslar için referans ödülleri alabilir.",
        rule9Title: "09. Hesap Güvenliği",
        rule9Body: "Şifrenizi, doğrulama kodunuzu, cüzdan kimlik bilgilerinizi veya diğer gizli hesap bilgilerinizi başka bir kişiyle asla paylaşmayın.",
        rule10Title: "10. Adil Kullanım",
        rule10Body: "Dolandırıcılık, yetkisiz işlemler, yanlış bilgiler, sipariş manipülasyonu veya platformu kötüye kullanma girişimleri kesinlikle yasaktır.",
        rule11Title: "11. Bakım ve Güncellemeler",
        rule11Body: "Platform planlı veya acil bakım ve sistem yükseltmeleri gerçekleştirebilir. Bu süre zarfında bazı hizmetler geçici olarak kullanılamayabilir.",
        rule12Title: "12. Müşteri Desteği",
        rule12Body: "Siparişler, hesap bakiyesi, komisyonlar, para çekme işlemleri veya satış ortaklığı faaliyetleri hakkındaki sorularınız için lütfen resmi destek kanalı aracılığıyla Müşteri Desteği ile iletişime geçin.",

        paymentTitle: "Ödeme Yöntemleri",
        paymentDesc: "Dijital Para Desteği",
        paymentH1: "Kripto Ödeme ve Para Yatırma",
        paymentStrong1: "Desteklenen Ödeme Yöntemleri",
        paymentP1: "Platformumuz seçili dijital para birimleri ve blockchain ağları kullanılarak para yatırmayı destekler. Mevcut seçenekler, hesabınızda şu anda bulunan ödeme yöntemine bağlı olarak USDT, USDC, TRC20, ERC20 ve BEP20'yi içerebilir.",
        paymentH2: "Nasıl Para Yatırılır",
        step1Title: "Adım 1 — Para Yatırmayı Aç",
        step1Body: "Hesabınıza giriş yapın ve Cüzdan → Para Yatırma bölümüne gidin.",
        step2Title: "Adım 2 — Kripto Para Birimi Seç",
        step2Body: "Tercih ettiğiniz dijital para birimini seçin ve doğru blockchain ağını seçin.",
        step3Title: "Adım 3 — Para Yatırma Adresini Kopyala",
        step3Body: "Para yatırma sayfasında görüntülenen cüzdan adresini kopyalayın. Para göndermeden önce her zaman adresi ve ağı doğrulayın.",
        step4Title: "Adım 4 — Ödemeyi Gönder",
        step4Body: "Kripto cüzdanınızı veya borsanızı açın, para yatırma adresini girin, aynı ağı seçin ve yatırmak istediğiniz tutarı girin.",
        step5Title: "Adım 5 — İşlemi Onayla",
        step5Body: "Transferi onaylamadan önce para birimini, ağı, cüzdan adresini ve tutarı dikkatlice inceleyin.",
        step6Title: "Adım 6 — Onay Bekle",
        step6Body: "Blockchain işlemi gerekli onayları aldıktan sonra, yatırılan tutar platformun işleme prosedürüne göre platform hesabınıza aktarılacaktır.",
        paymentH3Important: "Önemli",
        paymentP2: "Her zaman para yatırma sayfasında gösterilen tam kripto para birimini ve ağı kullanın. Desteklenmeyen bir ağ üzerinden veya yanlış bir adrese para göndermek, fonların kalıcı olarak kaybedilmesine neden olabilir.",
        paymentH3Status: "Para Yatırma Durumu",
        paymentP3: "İşlem durumunuzu Cüzdan → Para Yatırma Geçmişi'nden kontrol edebilirsiniz. Bir işlem normal işlem süresinin ötesinde beklemede kalırsa, işlem hash'i (TXID) ile Müşteri Desteği ile iletişime geçin."
    },

    ar: {
        navHome: "الرئيسية", navService: "الخدمة", navMenu: "القائمة",
        navRecord: "السجل", navMine: "حسابي",

        introTitle: "مقدمة",
        introDesc: "احصل على الطلبات. أكمل المهام. اكسب العمولات.",
        introBody: "تربط منصتنا المستخدمين بالطلبات المتاحة والفرص القائمة على المهام. ما عليك سوى التصفح والحصول على طلب متاح، واتبع الخطوات المطلوبة، وأرسل المهمة المكتملة عبر المنصة. قد تولد الطلبات المكتملة المؤهلة مكافآت عمولة وفقًا للشروط والأحكام المعمول بها.",

        affiliateTitle: "التسويق بالعمولة",
        affiliateDesc: "حوّل شبكتك إلى فرصة.",
        affiliateBody: "يمنحك التسويق بالعمولة الفرصة لكسب المكافآت من خلال تقديم عملاء جدد إلى منصتنا. شارك رابط الإحالة الفريد الخاص بك مع جمهورك أو أصدقائك أو شبكتك واحصل على عمولات للإحالات المؤهلة. كلما زادت شبكتك، زادت إمكانات أرباحك.",

        rulesTitle: "قواعد المنصة",
        rulesDesc: "قواعد المنصة وإرشادات المستخدم",
        rulesHeading: "قواعد المنصة وإرشادات العمل",
        rule1Title: "01. تسجيل الحساب",
        rule1Body: "يرجى تقديم معلومات دقيقة وصحيحة عند إنشاء حسابك. حافظ على سرية بيانات تسجيل الدخول الخاصة بك وأمانها.",
        rule2Title: "02. اختيار الطلب",
        rule2Body: "يمكن للمستخدمين الوصول إلى الطلبات المتاحة من خلال حساب العمل الخاص بهم. راجع تفاصيل الطلب بعناية قبل اختيار طلب.",
        rule3Title: "03. إكمال الطلب",
        rule3Body: "أكمل كل طلب محدد وفقًا للتعليمات المقدمة من المنصة وأرسل المعلومات المطلوبة بشكل صحيح.",
        rule4Title: "04. العمولة",
        rule4Body: "قد تولد الطلبات المكتملة المؤهلة عمولة بناءً على معدل العمولة المعمول به وشروط المنصة الحالية.",
        rule5Title: "05. رصيد العمل",
        rule5Body: "يجب على المستخدمين الحفاظ على رصيد الحساب المطلوب للأنشطة التي تتطلب أموالاً لمعالجة طلب. يجب تسجيل أي حركة رصيد في سجل معاملات الحساب.",
        rule6Title: "06. تقديم الطلب",
        rule6Body: "قبل تقديم طلب، تحقق من جميع التفاصيل ذات الصلة. بمجرد التقديم، قد لا يكون الطلب قابلاً للعكس حسب حالته.",
        rule7Title: "07. السحب",
        rule7Body: "يجوز للمستخدمين طلب سحب الأموال المؤهلة وفقًا لمتطلبات السحب الحالية للمنصة وإجراءات المعالجة وطرق الدفع المدعومة.",
        rule8Title: "08. برنامج الإحالة",
        rule8Body: "قد يتلقى المستخدمون المشاركون في برنامج الإحالة مكافآت إحالة للإحالات المؤهلة وفقًا لشروط الإحالة الحالية.",
        rule9Title: "09. أمان الحساب",
        rule9Body: "لا تشارك أبدًا كلمة المرور أو رمز التحقق أو بيانات اعتماد المحفظة أو أي معلومات حساب سرية أخرى مع أي شخص آخر.",
        rule10Title: "10. الاستخدام العادل",
        rule10Body: "الاحتيال والمعاملات غير المصرح بها والمعلومات الكاذبة والتلاعب بالطلبات أو محاولات إساءة استخدام المنصة محظورة تمامًا.",
        rule11Title: "11. الصيانة والتحديثات",
        rule11Body: "قد تقوم المنصة بإجراء صيانة مجدولة أو طارئة وترقيات النظام. قد تكون بعض الخدمات غير متاحة مؤقتًا خلال هذه الفترة.",
        rule12Title: "12. دعم العملاء",
        rule12Body: "للأسئلة المتعلقة بالطلبات أو رصيد الحساب أو العمولات أو السحوبات أو أنشطة الإحالة، يرجى الاتصال بدعم العملاء من خلال قناة الدعم الرسمية.",

        paymentTitle: "طرق الدفع",
        paymentDesc: "دعم العملات الرقمية",
        paymentH1: "الدفع والإيداع بالعملات الرقمية",
        paymentStrong1: "طرق الدفع المدعومة",
        paymentP1: "تدعم منصتنا الإيداعات باستخدام عملات رقمية محددة وشبكات بلوكشين. قد تشمل الخيارات المتاحة USDT وUSDC وTRC20 وERC20 وBEP20، اعتمادًا على طريقة الدفع المتاحة حاليًا في حسابك.",
        paymentH2: "كيفية الإيداع",
        step1Title: "الخطوة 1 — فتح الإيداع",
        step1Body: "قم بتسجيل الدخول إلى حسابك وانتقل إلى المحفظة → الإيداع.",
        step2Title: "الخطوة 2 — اختيار العملة الرقمية",
        step2Body: "اختر عملتك الرقمية المفضلة وحدد شبكة البلوكشين الصحيحة.",
        step3Title: "الخطوة 3 — نسخ عنوان الإيداع",
        step3Body: "انسخ عنوان المحفظة المعروض على صفحة الإيداع. تحقق دائمًا من العنوان والشبكة قبل إرسال الأموال.",
        step4Title: "الخطوة 4 — إرسال الدفعة",
        step4Body: "افتح محفظتك الرقمية أو البورصة، وأدخل عنوان الإيداع، وحدد نفس الشبكة، وأدخل المبلغ الذي تريد إيداعه.",
        step5Title: "الخطوة 5 — تأكيد المعاملة",
        step5Body: "راجع العملة والشبكة وعنوان المحفظة والمبلغ بعناية قبل تأكيد التحويل.",
        step6Title: "الخطوة 6 — انتظر التأكيد",
        step6Body: "بعد أن تتلقى معاملة البلوكشين التأكيدات المطلوبة، سيتم إضافة المبلغ المودع إلى حساب المنصة الخاص بك وفقًا لإجراءات المعالجة الخاصة بالمنصة.",
        paymentH3Important: "مهم",
        paymentP2: "استخدم دائمًا العملة الرقمية والشبكة الدقيقتين المعروضتين على صفحة الإيداع. قد يؤدي إرسال الأموال عبر شبكة غير مدعومة أو إلى عنوان غير صحيح إلى فقدان دائم للأموال.",
        paymentH3Status: "حالة الإيداع",
        paymentP3: "يمكنك التحقق من حالة معاملتك من المحفظة → سجل الإيداع. إذا ظلت المعاملة معلقة بعد وقت المعالجة الطبيعي، فاتصل بدعم العملاء مع تجزئة المعاملة (TXID)."
    },

    fa: {
        navHome: "خانه", navService: "خدمات", navMenu: "منو",
        navRecord: "سابقه", navMine: "من",

        introTitle: "معرفی",
        introDesc: "سفارش بگیرید. وظایف را کامل کنید. کمیسیون کسب کنید.",
        introBody: "پلتفرم ما کاربران را با سفارش‌های موجود و فرصت‌های مبتنی بر وظیفه متصل می‌کند. به سادگی مرور کنید و یک سفارش موجود بگیرید، مراحل مورد نیاز را دنبال کنید و کار تکمیل شده را از طریق پلتفرم ارسال کنید. سفارش‌های تکمیل شده واجد شرایط ممکن است پاداش کمیسیون بر اساس شرایط و ضوابط قابل اجرا ایجاد کنند.",

        affiliateTitle: "بازاریابی همکاری در فروش",
        affiliateDesc: "شبکه خود را به فرصت تبدیل کنید.",
        affiliateBody: "بازاریابی همکاری در فروش به شما فرصت کسب پاداش با معرفی مشتریان جدید به پلتفرم ما را می‌دهد. لینک معرفی منحصر به فرد خود را با مخاطبان، دوستان یا شبکه خود به اشتراک بگذارید و برای معرفی‌های واجد شرایط کمیسیون دریافت کنید. هرچه شبکه خود را بیشتر رشد دهید، پتانسیل درآمد شما بیشتر می‌شود.",

        rulesTitle: "قوانین پلتفرم",
        rulesDesc: "قوانین پلتفرم و دستورالعمل‌های کاربر",
        rulesHeading: "قوانین پلتفرم و دستورالعمل‌های کاری",
        rule1Title: "01. ثبت حساب",
        rule1Body: "لطفاً هنگام ایجاد حساب خود اطلاعات دقیق و معتبر ارائه دهید. اطلاعات ورود خود را محرمانه و ایمن نگه دارید.",
        rule2Title: "02. انتخاب سفارش",
        rule2Body: "کاربران می‌توانند از طریق حساب کاری خود به سفارش‌های موجود دسترسی داشته باشند. قبل از انتخاب سفارش، جزئیات سفارش را به دقت بررسی کنید.",
        rule3Title: "03. تکمیل سفارش",
        rule3Body: "هر سفارش انتخاب شده را طبق دستورالعمل‌های ارائه شده توسط پلتفرم تکمیل کنید و اطلاعات مورد نیاز را به درستی ارسال کنید.",
        rule4Title: "04. کمیسیون",
        rule4Body: "سفارش‌های تکمیل شده واجد شرایط ممکن است بر اساس نرخ کمیسیون قابل اجرا و شرایط فعلی پلتفرم کمیسیون ایجاد کنند.",
        rule5Title: "05. موجودی کاری",
        rule5Body: "کاربران باید موجودی حساب مورد نیاز را برای فعالیت‌هایی که نیاز به وجه برای پردازش سفارش دارند، حفظ کنند. هر حرکت موجودی باید در تاریخچه معاملات حساب ثبت شود.",
        rule6Title: "06. ارسال سفارش",
        rule6Body: "قبل از ارسال سفارش، تمام جزئیات مربوطه را بررسی کنید. پس از ارسال، سفارش بسته به وضعیت آن ممکن است قابل برگشت نباشد.",
        rule7Title: "07. برداشت",
        rule7Body: "کاربران می‌توانند درخواست برداشت وجه‌های واجد شرایط را طبق شرایط برداشت فعلی پلتفرم، رویه‌های پردازش و روش‌های پرداخت پشتیبانی شده، داشته باشند.",
        rule8Title: "08. برنامه همکاری در فروش",
        rule8Body: "کاربرانی که در برنامه همکاری در فروش شرکت می‌کنند ممکن است طبق شرایط فعلی همکاری، پاداش معرفی برای معرفی‌های واجد شرایط دریافت کنند.",
        rule9Title: "09. امنیت حساب",
        rule9Body: "هرگز رمز عبور، کد تأیید، اطلاعات ورود کیف پول یا سایر اطلاعات محرمانه حساب خود را با شخص دیگری به اشتراک نگذارید.",
        rule10Title: "10. استفاده منصفانه",
        rule10Body: "کلاهبرداری، معاملات غیرمجاز، اطلاعات نادرست، دستکاری سفارش یا تلاش برای سوء استفاده از پلتفرم اکیداً ممنوع است.",
        rule11Title: "11. نگهداری و به‌روزرسانی‌ها",
        rule11Body: "پلتفرم ممکن است نگهداری برنامه‌ریزی شده یا اضطراری و ارتقاء سیستم انجام دهد. برخی خدمات ممکن است در این دوره به طور موقت در دسترس نباشند.",
        rule12Title: "12. پشتیبانی مشتری",
        rule12Body: "برای سؤالات در مورد سفارش‌ها، موجودی حساب، کمیسیون‌ها، برداشت‌ها یا فعالیت‌های همکاری، لطفاً از طریق کانال پشتیبانی رسمی با پشتیبانی مشتری تماس بگیرید.",

        paymentTitle: "روش‌های پرداخت",
        paymentDesc: "پشتیبانی از ارز دیجیتال",
        paymentH1: "پرداخت و واریز کریپتو",
        paymentStrong1: "روش‌های پرداخت پشتیبانی شده",
        paymentP1: "پلتفرم ما از واریز با استفاده از ارزهای دیجیتال انتخاب شده و شبکه‌های بلاک‌چین پشتیبانی می‌کند. گزینه‌های موجود ممکن است شامل USDT، USDC، TRC20، ERC20 و BEP20 باشد، بسته به روش پرداخت موجود در حساب شما.",
        paymentH2: "نحوه واریز",
        step1Title: "مرحله 1 — باز کردن واریز",
        step1Body: "به حساب خود وارد شوید و به کیف پول → واریز بروید.",
        step2Title: "مرحله 2 — انتخاب ارز دیجیتال",
        step2Body: "ارز دیجیتال مورد نظر خود را انتخاب کنید و شبکه بلاک‌چین صحیح را انتخاب کنید.",
        step3Title: "مرحله 3 — کپی آدرس واریز",
        step3Body: "آدرس کیف پول نمایش داده شده در صفحه واریز را کپی کنید. همیشه قبل از ارسال وجه، آدرس و شبکه را بررسی کنید.",
        step4Title: "مرحله 4 — ارسال پرداخت",
        step4Body: "کیف پول کریپتو یا صرافی خود را باز کنید، آدرس واریز را وارد کنید، همان شبکه را انتخاب کنید و مبلغ مورد نظر برای واریز را وارد کنید.",
        step5Title: "مرحله 5 — تأیید تراکنش",
        step5Body: "قبل از تأیید انتقال، ارز، شبکه، آدرس کیف پول و مبلغ را به دقت بررسی کنید.",
        step6Title: "مرحله 6 — انتظار برای تأیید",
        step6Body: "پس از دریافت تأییدیه‌های مورد نیاز توسط تراکنش بلاک‌چین، مبلغ واریز شده طبق رویه پردازش پلتفرم به حساب پلتفرم شما اضافه می‌شود.",
        paymentH3Important: "مهم",
        paymentP2: "همیشه از دقیقاً همان ارز دیجیتال و شبکه‌ای که در صفحه واریز نمایش داده شده استفاده کنید. ارسال وجه از طریق شبکه پشتیبانی نشده یا به آدرس نادرست ممکن است منجر به از دست رفتن دائمی وجه شود.",
        paymentH3Status: "وضعیت واریز",
        paymentP3: "می‌توانید وضعیت تراکنش خود را از کیف پول → تاریخچه واریز بررسی کنید. اگر تراکنشی بیش از زمان پردازش عادی در حالت معلق باقی بماند، با هش تراکنش (TXID) با پشتیبانی مشتری تماس بگیرید."
    }
};

// ================= Safe localStorage =================
function safeGet(key) {
    try { return localStorage.getItem(key); } catch (e) { return null; }
}
function safeSet(key, value) {
    try { localStorage.setItem(key, value); } catch (e) {}
}

// ================= ভাষা প্রয়োগ =================
function applyDetailLanguage(lang) {
    const elements = document.querySelectorAll('[data-key]');
    elements.forEach(el => {
        const key = el.getAttribute('data-key');
        if (detailTranslations[lang] && detailTranslations[lang][key]) {
            el.textContent = detailTranslations[lang][key];
        }
    });
}

// ================= RTL =================
const rtlLanguages = ['ar', 'fa'];
function applyDetailDirection(lang) {
    if (rtlLanguages.includes(lang)) {
        document.body.classList.add('rtl');
        document.documentElement.setAttribute('dir', 'rtl');
    } else {
        document.body.classList.remove('rtl');
        document.documentElement.setAttribute('dir', 'ltr');
    }
}

// ================= প্রাথমিক লোড =================
const savedLang = safeGet('language') || 'en';
applyDetailLanguage(savedLang);
applyDetailDirection(savedLang);

// ================= থিম =================
const dashThemeToggle = document.getElementById('dashThemeToggle');
const dashThemeIcon = dashThemeToggle ? dashThemeToggle.querySelector('i') : null;

function applyDetailTheme(isDark) {
    if (isDark) {
        document.body.classList.add('dark-mode');
        if (dashThemeIcon) {
            dashThemeIcon.classList.remove('fa-moon');
            dashThemeIcon.classList.add('fa-sun');
        }
        const meta = document.querySelector('meta[name="theme-color"]');
        if (meta) meta.setAttribute('content', '#0f172a');
    } else {
        document.body.classList.remove('dark-mode');
        if (dashThemeIcon) {
            dashThemeIcon.classList.remove('fa-sun');
            dashThemeIcon.classList.add('fa-moon');
        }
        const meta = document.querySelector('meta[name="theme-color"]');
        if (meta) meta.setAttribute('content', '#f5f5f5');
    }
}

const savedTheme = safeGet('theme');
applyDetailTheme(savedTheme === 'dark');

if (dashThemeToggle) {
    let lastTap = 0;
    dashThemeToggle.addEventListener('click', function(e) {
        e.preventDefault();
        e.stopPropagation();
        const now = Date.now();
        if (now - lastTap < 300) return;
        lastTap = now;
        const isDark = !document.body.classList.contains('dark-mode');
        applyDetailTheme(isDark);
        safeSet('theme', isDark ? 'dark' : 'light');
    });
}
