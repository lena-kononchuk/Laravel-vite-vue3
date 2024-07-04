<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use App\Models\Faq;

class FaqSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $faqs = [
            [
                'Question' => 'Question: How is the business environment in Cyprus?',
                'Answer' => 'Answer: Cyprus is considered to be one of the most business-oriented countries of the EU, offering business entrepreneurs a variety of opportunities to expand their corporate dreams and ambitions.',
                'button' => 'Business',
            ],
            [
                'Question' => 'Question: What is the cost of living in Cyprus?',
                'Answer' => 'Answer: In comparison to other countries of the EU, the cost of living is relatively low. Of course, the cost of living varies from city to city. For example, this means that living in Paphos might be a bit cheaper than living in Limassol.',
                'button' => 'Prices',
            ],
            [
                'Question' => 'Question: What are the best cities in Cyprus for expats?',
                'Answer' => 'Answer: As Cyprus is among the most attractive destinations for people from different parts of the globe, large and thriving expat communities can be found in Paphos, Limassol, Larnaca, Nicosia.',
                'button' => 'Migration',
            ],
            [
                'Question' => 'Question: What is the Tax system like in Cyprus?',
                'Answer' => 'Answer: With one of the lowest corporate tax rates (12.5%) in the European Union, the tax system is attractive to foreign investors. Neither succession taxes nor gains from the disposal of securities are subject to tax.',
                'button' => 'Taxes',
            ],
            [
                'Question' => 'Question: How long does it take to buy a property in Cyprus?',
                'Answer' => 'Answer: The whole procedure for purchasing property in Cyprus should only take about 1-3 months. Of course, each situation is different and this timeframe may vary from one individual to another. Our relocation services aim to simplify this process by providing guidance and assistance from start to finish.',
                'button' => 'Investment',
            ],
            [
                'Question' => 'Question: How long does it take to become a permanent resident in Cyprus?',
                'Answer' => 'Answer: While a residency card can be obtained within two months through the fast-track process, a permanent resident of Cyprus can apply for Cyprus Citizenship after completing 5 years (1825 days) of legal stay in Cyprus, according to the naturalization scheme based on years of residence (M127). Once acquired, permanent residency in Cyprus is valid for life.',
                'button' => 'Migration',
            ],
            [
                'Question' => 'Question: Is Cyprus a good country to live with a family?',
                'Answer' => 'Answer: Cyprus is a perfect location for every type of family looking for a place to settle with their children. The stunning weather combined with great education programs, excellent healthcare system, and the ability to live in one of the safest countries in the world makes Cyprus a top choice among thousands every year.',
                'button' => 'Family Relocation',
            ],
            [
                'Question' => 'Question: Does PAM Consulting offer any Investment Plans?',
                'Answer' => 'Answer: Of course! Our services include the provision of a variety of investment opportunities you can choose from, depending on your needs and economic outlook.',
                'button' => 'Invest in Cyprus',
            ],
            [
                'Question' => 'Question: Is Cyprus a member of the European Union (EU)?',
                'Answer' => 'Answer: Yes, Cyprus has been a member of the EU since 2004.',
                'button' => 'Business',
            ],
            [
                'Question' => 'Question: How is the business environment in Cyprus?',
                'Answer' => 'Answer: Cyprus is considered to be one of the most business-oriented countries of the EU, offering business entrepreneurs a variety of opportunities to expand their corporate dreams and ambitions.',
                'button' => 'Business',
            ],
            [
                'Question' => 'Question: What is the cost of living in Cyprus?',
                'Answer' => 'Answer: In comparison to other countries of the EU, the cost of living is relatively low. Of course, the cost of living varies from city to city. For example, this means that living in Paphos might be a bit cheaper than living in Limassol.',
                'button' => 'Prices',
            ],
            [
                'Question' => 'Question: What are the best cities in Cyprus for expats?',
                'Answer' => 'Answer: As Cyprus is among the most attractive destinations for people from different parts of the globe, large and thriving expat communities can be found in Paphos, Limassol, Larnaca, Nicosia.',
                'button' => 'Migration',
            ],

        ];

        // Loop through the faqs array and create records in the database
        foreach ($faqs as $faq) {
            Faq::create($faq);
        }
    }
}
