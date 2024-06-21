# 열처리 품질 예측 알고리즘

### 열처리 품질보증 AI 데이터셋
판재 성형 가공 방법 중의 하나인 스탬핑 이후에 금속의 필요한 성질을 부여하기 위한 공정으로 생산품의 불량을 예측하기 위한 제조 AI 분석과정을 담은 데이터셋

### 전처리
<ul>
  <li>결측치 제거</li>
  <li>배정번호 제거</li>
  <li>X 변수들은 시계열 데이터지만 Y 변수는 배정번호 별 데이터로 되어있기 때문에 X 변수들의 배정번호별 통계값 산출이 필요해 평균, 표준편차를 이용</li>
</ul>

### RandomForest

### XGBoost


데이터셋 출처 : 중소벤처기업부, Korea AI Manufacturing Platform(KAMP), 열처리 품질보증 AI 데이터셋, 스마트제조혁신추진단(㈜임픽스), 2022.12.23., www.kamp-ai.kr
