let page

beforeAll(async () => {
  page = await global.__BROWSER__.newPage()
})

describe("HomePage", () => {
  test("the page displays correctly", async () => {
    await page.goto("http://localhost:3000/")
    await page.waitForSelector("#app")
    const text = await page.evaluate(e => e.textContent, await page.$("#app"))

    expect(text).toContain("This is the homepage!")
  })
})
