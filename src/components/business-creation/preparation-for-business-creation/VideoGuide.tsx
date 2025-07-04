"use client"


import PageContainer from "@/components/layout/PageContainer"

function getYouTubeEmbedUrl(url: string) {
  // Remove the @ prefix
  url = url.replace("@", "")
  
  // Extract video ID from various YouTube URL formats
  const regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|&v=)([^#&?]*).*/
  const match = url.match(regExp)
  
  if (match && match[2].length === 11) {
    // Return embed URL with the extracted video ID
    return `https://www.youtube.com/embed/${match[2]}`
  }
  
  return url
}

const videoData = [
  {
    id: 1,
    title: "On the agenda, the 5 criteria to take into account before choosing your legal form:",
    points: [
      "Does my activity exclude or impose a particular status?",
      "To choose a status: do you want to start alone or with others?",
      "What are your development prospects?",
      "What are your social protection needs?",
      "What is the most advantageous tax regime for your situation?",
    ],
    videoUrl: "@https://www.youtube.com/watch?v=tysDxjfgLMg&t=12s"
  },
  {
    id: 2,
    title: "On the program, all the financial aid to start your business:",
    points: [
      "What are the sources of funding?",
      "What are the forms of public funding?",
      "Aid reserved for job seekers",
      "THE ARCE & THE ACRE",
      "Aid for the creation of innovative businesses",
      "Aid available to all entrepreneurs",
      "Aid from local authorities",
    ],
    videoUrl: "@https://www.youtube.com/watch?v=tysDxjfgLMg&t=12s"
  },
  {
    id: 3,
    title: "On the agenda, expert advice, tips and valuable resources to help you avoid common business creation pitfalls:",
    points: [
      "Find an idea and challenge it",
      "Create a business plan",
      "Financing your business project",
      "Choosing the legal form of your business",
      "Domicile your business",
      "Register your business",
    ],
    videoUrl: "@https://www.youtube.com/watch?v=5yI9wEys2dc"
  },
]

export function VideoGuide() {



  return (
    <section className="lg:py-12 py-8 bg-lightPrimary">
      <PageContainer>
        <div className="mb-12">
          <h2 className="text-4xl font-bold text-tertiary font-crimson">Videos</h2>
        </div>

        <div className="space-y-16">
          {videoData.map((video, index) => (
            <div
              key={video.id}
              className={`grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-8 items-center ${
                index % 2 !== 0 ? "md:flex-row-reverse" : ""
              }`}
            >
              <div className="relative group">
                  <div className="aspect-[16/9] rounded-2xl overflow-hidden">
                    <iframe
                      src={getYouTubeEmbedUrl(video.videoUrl)}
                      className="w-full h-full"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                    />
                  </div>
              </div>

              <div className={`${index % 2 !== 0 ? "md:order-first" : ""}`}>
                <div className="flex items-start gap-3 mb-4">
                  <span className="text-yellow-500 text-xl">✨</span>
                  <h3 className="text-base font-semibold text-gray-700">{video.title}</h3>
                </div>
                <ul className="space-y-2 text-gray-600 list-inside">
                  {video.points.map((point, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <span className="text-gray-400 mt-1">•</span>
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </PageContainer>
    </section>
  )
} 