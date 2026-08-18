// 전문 용어 사전
export const glossary = {
    'UBI': 'Universal Basic Income (보편적 기본소득): 모든 사람에게 무조건적으로 지급되는 기본소득',
    'DID': 'Decentralized Identifier (분산 신원): 중앙 기관 없이 개인이 직접 관리하는 디지털 신원',
    'Personhood': '인격: 한 사람의 고유한 정체성과 존엄성',
    'Personhood Standard': '인격본위제: 화폐의 가치를 사람의 존재 자체에 연동하는 시스템',
    'QE': 'Quantitative Easing (양적 완화): 중앙은행이 시중에 통화를 공급하는 정책',
    'DAO': 'Decentralized Autonomous Organization (분산 자율 조직): 스마트 계약으로 운영되는 조직',
    'KYC': 'Know Your Customer (고객 신원 확인): 금융 기관이 고객의 신원을 확인하는 절차',
    'Sybil': '시빌 공격: 한 사람이 여러 개의 가짜 계정을 만들어 시스템을 조작하는 공격',
    'MVP': 'Minimum Viable Product (최소 기능 제품): 핵심 기능만 구현한 초기 버전 제품',
    'NFT': 'Non-Fungible Token (대체 불가능 토큰): 고유한 디지털 자산을 나타내는 토큰',
    'P2P': 'Peer-to-Peer (개인 간): 중개자 없이 개인 간 직접 거래하는 방식',
    'VC': 'Venture Capital (벤처 캐피탈): 스타트업에 투자하는 투자 회사',
    '인격본위제': '인격 자본주의를 떠받치는 화폐 제도. 화폐의 가치를 금(금본위제)이나 국가의 신용(법정화폐)이 아니라 \'사람의 존재\' 자체에 연동한다',
    '인격 자본주의': '경제의 출발점을 인간의 \'생산\'이 아니라 \'존재\'에 두려는 패러다임. 단행본 『인격 자본주의』가 원전',
    '데이터본위제': '인격이 보증하는 검증된 데이터를 화폐의 실질 가치를 돕는 촉매로 삼는 경제 시스템',
    '시빌 저항': '한 사람이 여러 계정을 만드는 것을 방지하는 메커니즘',
    '협동조합': '조합원들이 공동으로 소유하고 민주적으로 운영하는 조직',
    'Idium': '이 백서가 설계하는 인격본위제 화폐. 통화 단위 기호는 IDM',
    'IDmine': 'Emagin 프로젝트의 메인 플랫폼·서비스. ID(인격·신원)와 mine(나의 것, 캐낸다)의 이중 의미',
    'MonoID': 'IDmine의 신원·계정 레이어. 1인 1계정을 확인하고 데이터가 사용자에게 모이게 하는 모듈',
    'Emagin': '이 실험 전체를 이끄는 프로젝트의 이름 (Ecosystem for Monetary Autonomous Governance with Information-Neutrality)',
    '캉티용 효과': '새 화폐의 이득이 발행 지점에 가까운 순서로 배분된다는 원리 (리샤르 캉티용, 1755)',
    '비대칭 캐리': '신규 발행이 검증된 인격에게만 흘러, 화폐만 보유한 투기자는 희석을 부담하되 UBI는 받지 못하는 구조적 성질',
    '환류': '수수료를 소각하는 대신 기본소득 풀로 되돌리는 메커니즘. 소각과 회계적으로 항등',
    '가치 적층': '데이터→정보→인사이트→전문 지식→지적 재산→실물로 사용처가 확장되는 수요 성장의 사다리',
};

// 용어를 찾아서 툴팁을 추가하는 함수
export const wrapTermsWithTooltip = (text) => {
    if (typeof text !== 'string') return text;

    let result = text;
    const terms = Object.keys(glossary).sort((a, b) => b.length - a.length); // 긴 용어부터 처리

    terms.forEach(term => {
        const regex = new RegExp(`\\b${term}\\b`, 'g');
        result = result.replace(regex, `<abbr class="term-tooltip" title="${glossary[term]}">${term}</abbr>`);
    });

    return result;
};
