require './app/repositories/article_repos.rb'

RSpec.describe 'アーティクルレポジトリ' do

  it '記事をプットするとIDが得られる' do
    id = ArticleRepository.put('記事のサンプル')
    expect(id).not_to be_nil
  end

  it 'IDを指定してゲットすると記事が得られる' do
    id = ArticleRepository.put('記事のサンプル2')
    article = ArticleRepository.get(id)
    expect(article).to eq '記事のサンプル2'
  end

end
