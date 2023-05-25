import { MainForm } from "./MainForm"
import { MainHero } from "./MainHero"
import { MainQuestion } from "./MainQuestion"
import { MainExtension } from "./MainExtension"
import { MainFeatures } from "./MainFeatures"
import { comments, extensions, questions, form } from "../helpers/data"
import { companies, illustration, icons } from "../helpers/images"
import { MainFeaturesDetail } from "./MainFeaturesDetail"

const features = ['Simple Bookmarking', 'Speedy Searching', 'Easy Sharing']

const Main = () => {
    return (
        <>
            <main className="w-90 mx-auto mt-5 mb-15 relative">
                <MainHero path={illustration.illustrationHero} comments={comments} />
                <MainFeatures comments={comments} features={features} />
                <MainFeaturesDetail path={illustration.illustration1} comments={comments} />
                <MainExtension className="mb-10" extensions={extensions} comments={comments} companies={companies} />
                <MainQuestion comments={comments} questions={questions} icons={icons} />
            </main>
            <MainForm form={form}/>
        </>
    )
}

export { Main }