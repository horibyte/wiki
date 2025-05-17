require 'json'
require 'jekyll'

Jekyll::Hooks.register :site, :post_write do |site|
  search_data = site.pages.reject { |page| page.data['search_exclude'] }.map do |page|
    # Remove the leading slash from the URL
    cleaned_url = page.url.start_with?('/') ? page.url[1..-1] : page.url

    {
      'title' => page.data['title'].to_s,
      'url' => cleaned_url
    }
  end.to_json

  File.open(File.join(site.dest, 'search.json'), 'w') do |f|
    f.write(search_data)
  end
end