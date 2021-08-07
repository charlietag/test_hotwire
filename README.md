# README

## Test hotwire

* webpack (installed with turbolinks)
* https://hotwired.dev/
* test name

```
rails_614
```

* command

```
rails new rails_614 -d mysql --skip-spring
```

* This will work, because gem `gem 'hotwire-rails'` will do all the modification for you
  * Gemfile (turbolinks removed)
  * app/javascripts (stimulus)
  * ...

* Ref. https://github.com/hotwired/hotwire-rails


## Special Notice about Turbo + Stimulus

* `app/javascript/controllers/resetform_controller.js`
* `app/javascript/packs/application.js`
