#!/usr/bin/env ruby

index_file = 'index.html'
template_file = 'loader.template.js'
actual_file = 'loader.js'

template_content = File.read(template_file)
# puts '-------------------------------- template_content'
# puts template_content
# puts '--------------------------------'

index_content = File.read(index_file)
# puts '-------------------------------- index_content'
# puts index_content
# puts '--------------------------------'


head_content = index_content.match(/<!-- START HEAD -->(.*)<!-- END HEAD -->/m)[1]
head_content.gsub!(/(\s\s|\n)\s*/, ' ').gsub!(/'/, '"')
head_content.gsub!(/\="css/, "=\"'+baseURL+'css")
# puts '-------------------------------- head_content'
# puts head_content
# puts '--------------------------------'
body_content = index_content.match(/<!-- START BODY -->(.*)<!-- END BODY -->/m)[1]
body_content.gsub!(/(\s\s|\n)\s*/, ' ').gsub!(/'/, '"')
body_content.gsub!(/script src="/, "script src=\"'+baseURL+'")
# puts '--------------------------------'
# puts body_content
# puts '--------------------------------'
javascript_async_content = index_content.match(/<!-- START JAVASCRIPT -->(.*)<!-- WAIT JAVASCRIPT -->/m)[1]
javascript_async_content.gsub!(/(\s\s|\n)\s*/, ' ').gsub!(/'/, '"')
javascript_async_content = javascript_async_content.scan(/src="([^"]+)"/).flatten
# puts '-------------------------------- javascript_async_content'
# p javascript_async_content
# puts '--------------------------------'
javascript_sync_content = index_content.match(/<!-- WAIT JAVASCRIPT -->(.*)<!-- END JAVASCRIPT -->/m)[1]
javascript_sync_content.gsub!(/(\s\s|\n)\s*/, ' ').gsub!(/'/, '"')
javascript_sync_content = javascript_sync_content.scan(/src="([^"]+)"/).flatten
# puts '-------------------------------- javascript_sync_content'
# p javascript_sync_content
# puts '--------------------------------'


javascript_content = javascript_async_content.collect { |js| ".script(baseURL+'#{js}')" } + javascript_sync_content.collect { |js| ".script(baseURL+'#{js}').wait()" }
javascript_content = javascript_content.join("\n      ")

output_content = template_content
output_content.gsub!(/<<<<REPLACE HEAD>>>>/, head_content)
output_content.gsub!(/<<<<REPLACE BODY>>>>/, body_content)
output_content.gsub!(/<<<<REPLACE JAVASCRIPT>>>>/, javascript_content)

File.open(actual_file, 'w') { |file| file << output_content }
